import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  collection,
  doc,
  getFirestore,
  getDoc,
  setDoc,
  updateDoc,
  query,
  onSnapshot,
} from "firebase/firestore";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import LogInPopup from "./LogInPopup";
import GroceryList from "./GroceryList";
import Weeknight from "./Weeknight";
import RecipeBox from "./RecipeBox";
import Recipe from "./Recipe";
import RecipeCollection from "./RecipeCollection";
import "../styles/App.css";

function App() {
  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA9kwwvwh3hcuotK1nBd36bOGOZM-RcSh4",
    authDomain: "nyt-cooking-clone.firebaseapp.com",
    projectId: "nyt-cooking-clone",
    storageBucket: "nyt-cooking-clone.appspot.com",
    messagingSenderId: "7910689021",
    appId: "1:7910689021:web:eb4b978cf826ade44bd694",
    measurementId: "G-MVK92FWB4Y",
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // React State hooks
  const [user, setUser] = useState({
    uid: "",
    displayName: "",
    email: "",
    savedRecipes: [],
    cookedRecipes: [],
    ratedRecipes: [],
    commentedRecipes: [],
    groceryList: [],
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const [recipes, setRecipes] = useState(require("../data/recipes.json"));
  const [lastViewedRecipe, setLastViewedRecipe] = useState({});

  const recipeCollections = require("../data/recipe-collections.json");

  const cookingGuides = require("../data/cooking-guides.json");
  const profileIcons = [
    "ramen.png",
    "bibimbap.png",
    "tteok.png",
    "chicken-soup.png",
    "sushi-roll.png",
  ];

  // React Effect hooks
  useEffect(() => {
    // add recipes to database
    const addRecipe = async (recipe) => {
      try {
        await setDoc(doc(db, "recipes", recipe.id), recipe);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };

    // const recipesData = require("../data/recipes.json");
    // setRecipes(recipesData);
    // recipes.forEach((recipe) => addRecipe(recipe));
  }, []);

  // Set recipes state upon initial component mount & Firebase snapshot listens
  // for changes & updates the view
  useEffect(() => {
    const recipes = async () => {
      const q = query(collection(db, "recipes"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const recipesData = [];
        querySnapshot.forEach((doc) => {
          recipesData.push(doc.data());
        });
        setRecipes(recipesData);
      });
    };

    recipes();
  }, []);

  // update firestore users collection on user state change
  useEffect(() => {
    const updateUser = async () => {
      const userID = getAuth().currentUser.uid;
      const docRef = doc(db, "users", userID);
      await updateDoc(docRef, user);
    };

    if (loggedIn) {
      updateUser();
    }
  }, [user]);

  // update firestore recipes collection on recipe state change
  useEffect(() => {
    const updateRecipes = async () => {
      const recipeID = lastViewedRecipe.id;
      const docRef = doc(db, "recipes", recipeID);
      const [recipe] = recipes.filter(
        (recipe) => recipe.title === lastViewedRecipe.title
      );
      await updateDoc(docRef, recipe);
    };

    if (loggedIn) {
      updateRecipes();
    }
  }, [recipes]);

  // User authentication functions
  const signIn = async () => {
    let provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
    setLoggedIn(true);
    hideLogInPopup();

    // create new user if users database returns nothing
    if (!(await getUser())) {
      const newUser = await createUser();
      setUser(newUser);
    }
  };

  const signOutUser = () => {
    signOut(getAuth());
    setLoggedIn(false);
    window.location.reload(false);
    window.scrollTo(0, 0);
  };

  const getUser = async () => {
    const userID = getAuth().currentUser.uid;
    const docRef = doc(db, "users", userID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUser(docSnap.data());
      return docSnap.data();
    } else {
      return false;
    }
  };

  const createUser = async () => {
    const currentUser = getAuth().currentUser;

    // Generate index to randomly pick a profile icon for the user
    const randomIndex = Math.floor(Math.random() * 5);
    const user = {
      uid: currentUser.uid,
      displayName: currentUser.displayName,
      email: currentUser.email,
      savedRecipes: [],
      cookedRecipes: [],
      ratedRecipes: [],
      commentedRecipes: [],
      groceryList: [],
      profileIcon: profileIcons[randomIndex],
    };

    await setDoc(doc(db, "users", currentUser.uid), user);

    return user;
  };

  // Application logic functions
  const markCooked = (recipe) => {
    const userCopy = { ...user };
    const cooked = user.cookedRecipes.some(
      (cookedRecipe) => cookedRecipe.title === recipe.title
    );

    if (cooked) {
      userCopy.cookedRecipes = userCopy.cookedRecipes.filter(
        (cookedRecipe) => cookedRecipe.title !== recipe.title
      );
    } else {
      userCopy.cookedRecipes.push(recipe);
    }
    setUser(userCopy);
  };

  const rateRecipe = (e, recipe) => {
    const userCopy = { ...user };
    const recipesCopy = [...recipes];

    const rated = user.ratedRecipes.some(
      (ratedRecipe) => ratedRecipe.title === recipe.title
    );

    if (rated) {
      userCopy.ratedRecipes = userCopy.ratedRecipes.filter(
        (ratedRecipe) => ratedRecipe.title !== recipe.title
      );
      recipesCopy.map((recipeData) => {
        if (recipeData.title === recipe.title) {
          recipeData.ratings = recipeData.ratings.filter(
            (rating) => rating.userID !== user.uid
          );
        }
        return recipeData;
      });
    } else {
      const rating = parseInt(e.target.dataset.rating);
      userCopy.ratedRecipes.push({ title: recipe.title, rating: rating });
      recipesCopy.map((recipeData) => {
        if (recipeData.title === recipe.title) {
          recipeData.ratings.push({
            userID: user.uid,
            rating: rating,
          });
        }
        return recipeData;
      });
    }

    setUser(userCopy);
    setRecipes(recipesCopy);
  };

  const saveRecipe = (recipe) => {
    const userCopy = { ...user };
    userCopy.savedRecipes.push(recipe);

    setUser(userCopy);
  };

  const unsaveRecipe = (recipe) => {
    const userCopy = { ...user };
    userCopy.savedRecipes = userCopy.savedRecipes.filter(
      (savedRecipe) => savedRecipe.title !== recipe.title
    );

    setUser(userCopy);
  };

  const addToGroceryList = (recipe) => {
    const userCopy = { ...user };
    const groceryInfo = {
      title: recipe.title,
      yield: recipe.yield,
      ingredients: recipe.ingredients,
    };
    userCopy.groceryList.push(groceryInfo);

    setUser(userCopy);
  };

  const removeGroceryRecipe = (recipeTitle) => {
    const userCopy = { ...user };
    userCopy.groceryList = userCopy.groceryList.filter(
      (recipe) => recipe.title !== recipeTitle
    );

    setUser(userCopy);
  };

  const removeGroceryIngredient = (recipeTitle, ingredientName) => {
    const userCopy = { ...user };
    userCopy.groceryList = userCopy.groceryList.map((recipe) => {
      if (recipe.title === recipeTitle) {
        recipe.ingredients = recipe.ingredients.filter(
          (ingredient) => ingredient !== ingredientName
        );
      }
      return recipe;
    });

    setUser(userCopy);
  };

  const syncDisplayName = (recipeTitle, note) => {
    const recipesCopy = [...recipes];
    const userCopy = { ...user };

    recipesCopy.map((recipeData) => {
      if (recipeData.title === recipeTitle) {
        recipeData.notes.forEach((oldNote) => {
          if (oldNote.uid === user.uid) {
            oldNote.user = note.user;
          }
        });
      }
      return recipeData;
    });

    userCopy.commentedRecipes.map((commentedRecipe) => {
      if (commentedRecipe.title === recipeTitle) {
        commentedRecipe.notes.forEach((oldNote) => (oldNote.user = note.user));
      }
      return commentedRecipe;
    });

    setUser(userCopy);
    setRecipes(recipesCopy);
  };

  const addPublicNote = (recipeTitle, note) => {
    const recipesCopy = [...recipes];

    recipesCopy.map((recipeData) => {
      if (recipeData.title === recipeTitle) {
        recipeData.notes.push(note);
      }
      return recipeData;
    });

    syncDisplayName(recipeTitle, note);
    setRecipes(recipesCopy);
  };

  const addPrivateNote = (recipeTitle, note) => {
    const userCopy = { ...user };
    const isFirstPrivateComment = userCopy.commentedRecipes.some(
      (commentedRecipe) => commentedRecipe.title === recipeTitle
    );

    if (isFirstPrivateComment) {
      userCopy.commentedRecipes.map((commentedRecipe) => {
        if (commentedRecipe.title === recipeTitle) {
          commentedRecipe.notes.push(note);
        }
        return commentedRecipe;
      });
    } else {
      userCopy.commentedRecipes.push({ title: recipeTitle, notes: [note] });
    }

    syncDisplayName(recipeTitle, note);
    setUser(userCopy);
  };

  const likeNote = (recipeTitle, likedNote) => {
    const recipesCopy = [...recipes];

    recipesCopy.map((recipe) => {
      if (recipe.title === recipeTitle) {
        recipe.notes.map((note) => {
          if (note.id === likedNote.id) {
            if (note.likes.some((like) => like === user.uid)) {
              note.likes = note.likes.filter((like) => like !== user.uid);
            } else {
              note.likes.push(user.uid);
            }
          }
          return note;
        });
      }
      return recipe;
    });

    setRecipes(recipesCopy);
  };

  // DOM functions
  const showLogInPopup = () => {
    const logInPopup = document.querySelector(".log-in-popup");
    logInPopup.classList.remove("hidden");
  };

  const hideLogInPopup = () => {
    const logInPopup = document.querySelector(".log-in-popup");
    logInPopup.classList.add("hidden");
  };

  const showGroceryList = () => {
    const groceryList = document.querySelector(".grocery-list-popup");
    groceryList.classList.remove("hidden");
  };

  const hideGroceryList = () => {
    const groceryList = document.querySelector(".grocery-list-popup");
    groceryList.classList.add("hidden");
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header
          loggedIn={loggedIn}
          recipes={recipes}
          signOutUser={signOutUser}
          showLogInPopup={showLogInPopup}
          hideLogInPopup={hideLogInPopup}
          showGroceryList={showGroceryList}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                user={user}
                loggedIn={loggedIn}
                recipes={recipes}
                recipeCollections={recipeCollections}
                cookingGuides={cookingGuides}
                setCurrentPage={setCurrentPage}
                saveRecipe={saveRecipe}
                unsaveRecipe={unsaveRecipe}
                showLogInPopup={showLogInPopup}
                hideLogInPopup={hideLogInPopup}
              />
            }
          />
          <Route
            path="/weeknight"
            element={
              <Weeknight
                user={user}
                loggedIn={loggedIn}
                recipes={recipes}
                recipeCollections={recipeCollections}
                setCurrentPage={setCurrentPage}
                saveRecipe={saveRecipe}
                unsaveRecipe={unsaveRecipe}
                showLogInPopup={showLogInPopup}
                hideLogInPopup={hideLogInPopup}
              />
            }
          />
          <Route
            path="/recipe-box"
            element={
              <RecipeBox
                user={user}
                loggedIn={loggedIn}
                recipes={recipes}
                cookingGuides={cookingGuides}
                setCurrentPage={setCurrentPage}
                saveRecipe={saveRecipe}
                unsaveRecipe={unsaveRecipe}
                showLogInPopup={showLogInPopup}
                hideLogInPopup={hideLogInPopup}
              />
            }
          />
          <Route
            path="/recipe/:recipe"
            element={
              <Recipe
                user={user}
                loggedIn={loggedIn}
                recipes={recipes}
                setCurrentPage={setCurrentPage}
                setLastViewedRecipe={setLastViewedRecipe}
                addToGroceryList={addToGroceryList}
                saveRecipe={saveRecipe}
                unsaveRecipe={unsaveRecipe}
                rateRecipe={rateRecipe}
                markCooked={markCooked}
                addPublicNote={addPublicNote}
                addPrivateNote={addPrivateNote}
                likeNote={likeNote}
                showLogInPopup={showLogInPopup}
                hideLogInPopup={hideLogInPopup}
                showGroceryList={showGroceryList}
              />
            }
          />
          <Route
            path="/collection/:collection"
            element={
              <RecipeCollection
                user={user}
                loggedIn={loggedIn}
                recipes={recipes}
                recipeCollections={recipeCollections}
                setCurrentPage={setCurrentPage}
                saveRecipe={saveRecipe}
                unsaveRecipe={unsaveRecipe}
                showLogInPopup={showLogInPopup}
                hideLogInPopup={hideLogInPopup}
              />
            }
          />
        </Routes>
        <Footer />
        <LogInPopup
          currentPage={currentPage}
          signIn={signIn}
          showLogInPopup={showLogInPopup}
          hideLogInPopup={hideLogInPopup}
        />
        <GroceryList
          user={user}
          removeGroceryRecipe={removeGroceryRecipe}
          removeGroceryIngredient={removeGroceryIngredient}
          showGroceryList={showGroceryList}
          hideGroceryList={hideGroceryList}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;

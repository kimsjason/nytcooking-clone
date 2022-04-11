import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  FacebookAuthProvider,
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
  arrayUnion,
  arrayRemove,
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
import { getFirebaseConfig } from "../firebase-config";
import Collections from "./Collections";

function App() {
  // Firebase configuration
  const firebaseConfig = getFirebaseConfig();
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

  // RECIPES SNAPSHOT
  // Set recipes state upon initial component mount & Firebase snapshot listens
  // for changes & updates the state
  useEffect(() => {
    const q = query(collection(db, "recipes"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const recipes = [];
      querySnapshot.forEach((doc) => {
        recipes.push(doc.data());
      });
      setRecipes(recipes);
    });

    return () => unsubscribe();
  }, []);

  // USER SNAPSHOT
  // Set user's state upon login & Firebase snapshot listens for changes &
  // updates the state
  useEffect(() => {
    if (loggedIn) {
      const userRef = doc(db, "users", user.uid);
      const unsubscribe = onSnapshot(userRef, (doc) => {
        setUser(doc.data());
      });
      return () => unsubscribe();
    }
  }, [loggedIn]);

  // User authentication functions
  const signInWithGoogle = async () => {
    let provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);

    // create new user if users database returns nothing
    const user = await getUser();
    if (!user) {
      const newUser = await createUser();
      setUser(newUser);
    } else {
      setUser(user);
    }

    setLoggedIn(true);
    hideLogInPopup();
  };

  const signInWithFacebook = async () => {
    let provider = new FacebookAuthProvider();
    await signInWithPopup(getAuth(), provider);

    // create new user if users database returns nothing
    if (!user) {
      const newUser = await createUser();
      setUser(newUser);
    } else {
      setUser(user);
    }

    setLoggedIn(true);
    hideLogInPopup();
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

  // Application logic functions - Firestore database updates
  const markCooked = async (recipe) => {
    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, {
      cookedRecipes: arrayUnion(recipe),
    });
  };

  const unmarkCooked = async (recipe) => {
    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, {
      cookedRecipes: user.cookedRecipes.filter(
        (cookedRecipe) => cookedRecipe.title !== recipe.title
      ),
    });
  };

  const rateRecipe = async (recipe, rating) => {
    const recipeRef = doc(db, "recipes", recipe.id);
    await updateDoc(recipeRef, {
      ratings: arrayUnion({
        userID: user.uid,
        rating: rating,
      }),
    });

    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, {
      ratedRecipes: arrayUnion({
        title: recipe.title,
        rating: rating,
      }),
    });
  };

  const unrateRecipe = async (recipe) => {
    const recipeRef = doc(db, "recipes", recipe.id);
    await updateDoc(recipeRef, {
      ratings: recipe.ratings.filter((rating) => rating.userID !== user.uid),
    });

    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, {
      ratedRecipes: user.ratedRecipes.filter(
        (ratedRecipe) => ratedRecipe.title !== recipe.title
      ),
    });
  };

  const saveRecipe = async (recipe) => {
    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, {
      savedRecipes: arrayUnion(recipe),
    });
  };

  const unsaveRecipe = async (recipe) => {
    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, {
      savedRecipes: arrayRemove(recipe),
    });
  };

  const addToGroceryList = async (recipe) => {
    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, {
      groceryList: arrayUnion({
        title: recipe.title,
        yield: recipe.yield,
        ingredients: recipe.ingredients,
      }),
    });
  };

  const removeGroceryRecipe = async (recipeTitle) => {
    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, {
      groceryList: user.groceryList.filter(
        (recipe) => recipe.title !== recipeTitle
      ),
    });
  };

  const removeGroceryIngredient = async (recipeTitle, ingredientName) => {
    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, {
      groceryList: user.groceryList.map((recipe) => {
        if (recipe.title === recipeTitle) {
          recipe.ingredients = recipe.ingredients.filter(
            (ingredient) => ingredient !== ingredientName
          );
        }
        return recipe;
      }),
    });
  };

  const syncDisplayName = async (recipeID, note) => {
    // Sync name with user's public notes
    const recipeRef = doc(db, "recipes", recipeID);
    const [recipe] = recipes.filter((recipe) => recipe.id === recipeID);
    const updatedNotes = recipe.notes.map((oldNote) => {
      if (oldNote.uid === user.uid) {
        oldNote.user = note.user;
      }
      return oldNote;
    });
    await updateDoc(recipeRef, {
      notes: updatedNotes,
    });

    // Sync name with user's private notes
    const userRef = doc(db, "users", user.uid);
    const updatedCommentedRecipes = user.commentedRecipes.map(
      (commentedRecipe) => {
        commentedRecipe.notes.map((oldNote) => {
          oldNote.user = note.user;
          return oldNote;
        });
        return commentedRecipe;
      }
    );
    await updateDoc(userRef, {
      commentedRecipes: updatedCommentedRecipes,
    });
  };

  const addPublicNote = (recipe, note) => {
    syncDisplayName(recipe.id, note).then(async () => {
      const recipeRef = doc(db, "recipes", recipe.id);
      await updateDoc(recipeRef, {
        notes: arrayUnion(note),
      });
    });
  };

  const addPrivateNote = (recipe, note) => {
    syncDisplayName(recipe.id, note).then(async () => {
      const userRef = doc(db, "users", user.uid);
      const isFirstPrivateComment = !user.commentedRecipes.some(
        (commentedRecipe) => commentedRecipe.title === recipe.title
      );
      if (isFirstPrivateComment) {
        await updateDoc(userRef, {
          commentedRecipes: arrayUnion({
            title: recipe.title,
            notes: [note],
          }),
        });
      } else {
        await updateDoc(userRef, {
          commentedRecipes: user.commentedRecipes.map((commentedRecipe) => {
            if (commentedRecipe.title === recipe.title) {
              commentedRecipe.notes.push(note);
            }
            return commentedRecipe;
          }),
        });
      }
    });
  };

  const likeNote = async (recipeID, noteID) => {
    const recipeRef = doc(db, "recipes", recipeID);
    const docSnap = await getDoc(recipeRef);

    if (docSnap.exists()) {
      const recipe = docSnap.data();
      const notes = recipe.notes.map((note) => {
        if (note.id === noteID) {
          note.likes.push(user.uid);
        }
        return note;
      });
      await updateDoc(recipeRef, {
        notes: notes,
      });
    }
  };

  const unlikeNote = async (recipeID, noteID) => {
    const recipeRef = doc(db, "recipes", recipeID);
    const docSnap = await getDoc(recipeRef);

    if (docSnap.exists()) {
      const recipe = docSnap.data();
      const notes = recipe.notes.map((note) => {
        if (note.id === noteID) {
          note.likes = note.likes.filter((like) => like !== user.uid);
        }
        return note;
      });
      await updateDoc(recipeRef, {
        notes: notes,
      });
    }
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
                unrateRecipe={unrateRecipe}
                markCooked={markCooked}
                unmarkCooked={unmarkCooked}
                addPublicNote={addPublicNote}
                addPrivateNote={addPrivateNote}
                likeNote={likeNote}
                unlikeNote={unlikeNote}
                showLogInPopup={showLogInPopup}
                hideLogInPopup={hideLogInPopup}
                showGroceryList={showGroceryList}
              />
            }
          />
          <Route
            path="/collections"
            element={
              <Collections
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
          signInWithGoogle={signInWithGoogle}
          signInWithFacebook={signInWithFacebook}
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

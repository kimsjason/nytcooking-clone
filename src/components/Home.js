import { useEffect } from "react";
import { RecipeOfTheDay } from "./RecipeOfTheDay";
import { WhatToCookThisWeek } from "./WhatToCookThisWeek";

const Home = ({
  user,
  loggedIn,
  recipes,
  recipeCollections,
  cookingGuides,
  setCurrentPage,
  hideLogInPopup,
  showLogInPopup,
  saveRecipe,
  unsaveRecipe,
}) => {
  const recipeOfTheDay = recipes[0];

  useEffect(() => {
    window.scrollTo(0, 0);
    hideLogInPopup();
    setCurrentPage("home");
  }, []);

  return (
    <div className="home-page">
      <RecipeOfTheDay
        user={user}
        loggedIn={loggedIn}
        recipeOfTheDay={recipeOfTheDay}
        saveRecipe={saveRecipe}
        unsaveRecipe={unsaveRecipe}
        hideLogInPopup={hideLogInPopup}
        showLogInPopup={showLogInPopup}
      />
      <WhatToCookThisWeek
        user={user}
        loggedIn={loggedIn}
        recipes={recipes}
        recipeCollections={recipeCollections}
        cookingGuides={cookingGuides}
        saveRecipe={saveRecipe}
        unsaveRecipe={unsaveRecipe}
        hideLogInPopup={hideLogInPopup}
        showLogInPopup={showLogInPopup}
      />
    </div>
  );
};

export default Home;

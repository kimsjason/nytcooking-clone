import { useEffect } from "react";
import { RecipeOfTheDay } from "./RecipeOfTheDay";
import { WhatToCookThisWeek } from "./WhatToCookThisWeek";

const Home = ({
  user,
  loggedIn,
  recipes,
  recipeCollections,
  cookingGuides,
  showLogInPopup,
  saveRecipe,
}) => {
  const recipeOfTheDay = recipes[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      <RecipeOfTheDay
        recipe={recipeOfTheDay}
        user={user}
        showLogInPopup={showLogInPopup}
        loggedIn={loggedIn}
        saveRecipe={saveRecipe}
      />
      <WhatToCookThisWeek
        recipes={recipes}
        user={user}
        recipeCollections={recipeCollections}
        cookingGuides={cookingGuides}
        loggedIn={loggedIn}
        saveRecipe={saveRecipe}
      />
    </div>
  );
};

export default Home;

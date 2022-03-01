import { RecipeOfTheDay } from "./RecipeOfTheDay";
import { WhatToCookThisWeek } from "./WhatToCookThisWeek";

const Home = (props) => {
  const recipeOfTheDay = props.recipes[0];

  return (
    <div className="home-page">
      <RecipeOfTheDay
        recipe={recipeOfTheDay}
        user={props.user}
        setDisplayLogInPopup={props.setDisplayLogInPopup}
        loggedIn={props.loggedIn}
        saveRecipe={props.saveRecipe}
      />
      <WhatToCookThisWeek
        recipes={props.recipes}
        user={props.user}
        recipeCollections={props.recipeCollections}
        cookingGuides={props.cookingGuides}
        loggedIn={props.loggedIn}
        saveRecipe={props.saveRecipe}
      />
    </div>
  );
};

export default Home;

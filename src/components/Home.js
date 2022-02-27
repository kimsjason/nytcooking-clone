import { RecipeOfTheDay } from "./RecipeOfTheDay";
import { WhatToCookThisWeek } from "./WhatToCookThisWeek";

const Home = (props) => {
  const recipeOfTheDay = props.recipes[0];

  const setDisplayLogInPopup = () => {
    props.setDisplayLogInPopup();
  };

  return (
    <div className="home-page">
      <RecipeOfTheDay
        recipe={recipeOfTheDay}
        setDisplayLogInPopup={props.setDisplayLogInPopup}
        loggedIn={props.loggedIn}
      />
      <WhatToCookThisWeek
        recipes={props.recipes}
        recipeCollections={props.recipeCollections}
        cookingGuides={props.cookingGuides}
        loggedIn={props.loggedIn}
      />
    </div>
  );
};

export default Home;

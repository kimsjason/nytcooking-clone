import { RecipeOfTheDay } from "./RecipeOfTheDay";
import { WhatToCookThisWeek } from "./WhatToCookThisWeek";

const Home = (props) => {
  const recipeOfTheDay = props.recipes[0];

  return (
    <div className="home-page">
      <RecipeOfTheDay recipe={recipeOfTheDay} />
      <WhatToCookThisWeek
        recipes={props.recipes}
        recipeCollections={props.recipeCollections}
      />
    </div>
  );
};

export default Home;

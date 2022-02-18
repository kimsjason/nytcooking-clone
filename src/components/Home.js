import { RecipeOfTheDay } from "./RecipeOfTheDay";

const Home = (props) => {
  const recipeOfTheDay = props.recipes[0];

  return (
    <div className="home-page">
      <RecipeOfTheDay recipe={recipeOfTheDay} />
    </div>
  );
};

export default Home;

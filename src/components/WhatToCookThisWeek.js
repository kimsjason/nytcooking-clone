import { Link } from "react-router-dom";
import { format, startOfWeek } from "date-fns";
import { StyledWhatToCookThisWeek } from "../styles/WhatToCookThisWeek.styled";
import { RecipeThumbnail } from "./RecipeThumbnail";
import { RecipeCollectionThumbnail } from "./RecipeCollectionThumbnail";
import { CookingGuideThumbnail } from "./CookingGuideThumbnail";

const WhatToCookThisWeek = ({
  user,
  loggedIn,
  recipes,
  recipeCollections,
  cookingGuides,
  saveRecipe,
  unsaveRecipe,
  showLogInPopup,
  hideLogInPopup,
}) => {
  const date = new Date();
  const begOfWeek = startOfWeek(date);
  const formattedDate = format(begOfWeek, "LLLL do").toLocaleUpperCase();

  return (
    <StyledWhatToCookThisWeek>
      <div className="what-to-cook-this-week">
        <div className="main-header">
          <div className="title">What to Cook This Week</div>
          <div className="subtitle">
            RECIPES, GUIDES AND MORE FOR THE WEEK OF {formattedDate}
          </div>
        </div>
        <div className="editor-recommendations">
          <div className="sub-header">
            <div className="title">Jason's Suggestions</div>
            <div className="subtitle">
              Recipes selected throughout the week by Jason Kim, not the food
              editor of The New York Times.
            </div>
          </div>
          <div className="recipes">
            {recipes.map((recipe) => {
              return (
                <Link key={recipe.title} to={`/recipe/${recipe.title}`}>
                  <RecipeThumbnail
                    user={user}
                    loggedIn={loggedIn}
                    recipe={recipe}
                    saveRecipe={saveRecipe}
                    unsaveRecipe={unsaveRecipe}
                    showLogInPopup={showLogInPopup}
                    hideLogInPopup={hideLogInPopup}
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="editor-recommendations">
          <div className="sub-header">
            <div className="title">More From Our Editors</div>
            <div className="subtitle">
              Weeknight suppers, seasonal favorites and other ideas for this
              week.
            </div>
          </div>
          <div className="recipe-collections">
            {recipeCollections.slice(0, 4).map((recipeCollection) => {
              return (
                <Link
                  to={`/collection/${recipeCollection.title}`}
                  key={recipeCollection.title}
                >
                  <RecipeCollectionThumbnail
                    user={user}
                    loggedIn={loggedIn}
                    recipes={recipes}
                    recipeCollection={recipeCollection}
                    saveRecipe={saveRecipe}
                    unsaveRecipe={unsaveRecipe}
                    showLogInPopup={showLogInPopup}
                    hideLogInPopup={hideLogInPopup}
                  />
                </Link>
              );
            })}
          </div>
          <Link to="/collections" className="see-all-link">
            <div className="see-all">See All Editor's Collections</div>
          </Link>
        </div>
        <div className="editor-recommendations">
          <div className="sub-header">
            <div className="title">Master the Anime Basics</div>
            <div className="subtitle">
              Our guides offer recipes, videos, techniques and tips for novices
              and advanced cooks.
            </div>
          </div>
          <div className="recipes">
            {cookingGuides.map((cookingGuide) => {
              return (
                <CookingGuideThumbnail
                  key={cookingGuide.title}
                  cookingGuide={cookingGuide}
                />
              );
            })}
          </div>
          <Link to="/cooking-guides" className="see-all-link">
            <div className="see-all">See All Cooking Guides</div>
          </Link>
        </div>
      </div>
    </StyledWhatToCookThisWeek>
  );
};

export { WhatToCookThisWeek };

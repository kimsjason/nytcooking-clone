import { Link } from "react-router-dom";
import { format, startOfWeek } from "date-fns";
import { StyledWhatToCookThisWeek } from "../styles/WhatToCookThisWeek.styled";
import { RecipeThumbnail } from "./RecipeThumbnail";
import { RecipeCollectionThumbnail } from "./RecipeCollectionThumbnail";

const WhatToCookThisWeek = (props) => {
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
            <div className="title">Sam's Suggestions</div>
            <div className="subtitle">
              Recipes selected throughout the week by Sam Sifton, food editor of
              The New York Times.
            </div>
          </div>
          <div className="recipes">
            {props.recipes.map((recipe) => {
              return (
                <Link to={`/${recipe.title}`}>
                  <RecipeThumbnail recipe={recipe} />
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
          <div className="recipes">
            {props.recipeCollections.map((recipeCollection) => {
              return (
                <RecipeCollectionThumbnail
                  recipeCollection={recipeCollection}
                />
              );
            })}
          </div>
          <div className="see-all">See All Editor's Collections</div>
        </div>
        <div className="editor-recommendations">
          <div className="sub-header">
            <div className="title">Master the Basics</div>
            <div className="subtitle">
              Our guides offer recipes, videos, techniques and tips for novices
              and advanced cooks.
            </div>
          </div>
          <div className="recipes"></div>
          <div className="see-all">See All Cooking Guides</div>
        </div>
      </div>
    </StyledWhatToCookThisWeek>
  );
};

export { WhatToCookThisWeek };

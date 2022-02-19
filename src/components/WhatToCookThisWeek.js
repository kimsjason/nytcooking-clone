import { Link } from "react-router-dom";
import { format, startOfWeek } from "date-fns";
import { StyledWhatToCookThisWeek } from "../styles/WhatToCookThisWeek.styled";
import { RecipeThumbnail } from "./RecipeThumbnail";

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
                  <RecipeThumbnail recipe={recipe} />;
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </StyledWhatToCookThisWeek>
  );
};

export { WhatToCookThisWeek };

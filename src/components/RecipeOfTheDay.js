import { Link } from "react-router-dom";
import {
  Expand,
  Facebook,
  Pinterest,
  BookmarkBorder,
} from "@mui/icons-material";
import { StyledRecipeOfTheDay } from "../styles/RecipeOfTheDay.styled";

const RecipeOfTheDay = (props) => {
  const recipeOfTheDay = props.recipe;

  const setDisplayLogInPopup = () => {
    props.setDisplayLogInPopup(true);
  };

  return (
    <StyledRecipeOfTheDay>
      <div className="recipe-of-the-day">
        <Link
          to={`/recipe/${recipeOfTheDay.title}`}
          state={{ recipe: recipeOfTheDay }}
        >
          <img src={recipeOfTheDay.img} alt="recipe of the day" />

          <div className="recipe-label">
            <div className="recipe-info">
              <div className="recipe-title">{recipeOfTheDay.title}</div>
              <div className="recipe-subtitle">{recipeOfTheDay.subtitle}</div>
              <div className="recipe-author">{recipeOfTheDay.author}</div>
              <div className="label">RECIPE OF THE DAY</div>
            </div>
          </div>
        </Link>

        <div className="save-share-recipe">
          <div className="save-recipe" onClick={setDisplayLogInPopup}>
            <BookmarkBorder className="bookmark-icon" />
            Save To Recipe Box
            {props.loggedIn ? (
              ""
            ) : (
              <div className="description-box-container">
                <div className="description-box">
                  <div className="title">Build Your Recipe Box</div>
                  <div className="description">
                    Save your favorite recipes, even recipes from other
                    websites, in one place.
                  </div>
                  <div className="log-in-sign-up">
                    <span>Log in</span> or <span>Sign up</span> to save this
                    recipe.
                  </div>
                </div>
                <div className="arrow"></div>
              </div>
            )}
          </div>
          <Facebook className="facebook-icon" />
          <Pinterest className="pinterest-icon" />
          <Expand className="expand-icon" />
        </div>
      </div>
    </StyledRecipeOfTheDay>
  );
};

export { RecipeOfTheDay };

import {
  Expand,
  Facebook,
  Pinterest,
  BookmarkBorder,
} from "@mui/icons-material";
import { StyledRecipeOfTheDay } from "../styles/RecipeOfTheDay.styled";

const RecipeOfTheDay = (props) => {
  const recipeOfTheDay = props.recipe;
  return (
    <StyledRecipeOfTheDay>
      <div className="recipe-of-the-day">
        <img src={recipeOfTheDay.img} alt="recipe of the day" />
        <div className="recipe-label">
          <div className="recipe-info">
            <div className="recipe-title">{recipeOfTheDay.title}</div>
            <div className="recipe-subtitle">{recipeOfTheDay.subtitle}</div>
            <div className="recipe-author">{recipeOfTheDay.author}</div>
            <div className="label">RECIPE OF THE DAY</div>
          </div>
        </div>
        <div className="save-share-recipe">
          <div className="save-recipe">
            <BookmarkBorder className="bookmark-icon" />
            Save To Recipe Box
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

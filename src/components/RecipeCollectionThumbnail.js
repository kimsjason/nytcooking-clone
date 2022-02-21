import { BookmarkBorder } from "@mui/icons-material";
import { StyledRecipeCollectionThumbnail } from "../styles/RecipeCollectionThumbnail.styled";

const RecipeCollectionThumbnail = (props) => {
  return (
    <StyledRecipeCollectionThumbnail>
      <div className="recipe-collection-thumbnail">
        <img
          className="recipe-collection-image"
          src={props.recipeCollection.img}
          alt="recipe collection thumbnail"
        />
        <div className="thumbnail-content">
          <div className="title">{props.recipeCollection.title}</div>
          <div className="save-recipes">
            <BookmarkBorder className="bookmark-icon" />
            Save all {props.recipeCollection.recipes.length} Recipes
          </div>
        </div>
      </div>
    </StyledRecipeCollectionThumbnail>
  );
};

export { RecipeCollectionThumbnail };

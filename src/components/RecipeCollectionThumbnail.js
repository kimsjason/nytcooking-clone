import { BookmarkBorder } from "@mui/icons-material";
import { StyledRecipeCollectionThumbnail } from "../styles/RecipeCollectionThumbnail.styled";

const RecipeCollectionThumbnail = ({ recipeCollection }) => {
  return (
    <StyledRecipeCollectionThumbnail>
      <div className="recipe-collection-thumbnail">
        <img
          className="recipe-collection-image"
          src={require(`../assets/${recipeCollection.img}`)}
          alt="recipe collection thumbnail"
        />
        <div className="thumbnail-content">
          <div className="title">{recipeCollection.title}</div>
          <div className="save-recipes">
            <BookmarkBorder className="bookmark-icon" />
            Save all {recipeCollection.recipes.length} Recipes
          </div>
        </div>
      </div>
    </StyledRecipeCollectionThumbnail>
  );
};

export { RecipeCollectionThumbnail };

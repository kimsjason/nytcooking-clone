import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import { StyledRecipeCollectionThumbnail } from "../styles/RecipeCollectionThumbnail.styled";

const RecipeCollectionThumbnail = ({
  user,
  recipes,
  recipeCollection,
  saveRecipe,
  unsaveRecipe,
}) => {
  const savedAllRecipes = recipeCollection.recipes.every((recipeTitle) => {
    return user.savedRecipes.some(
      (savedRecipe) => savedRecipe.title === recipeTitle
    );
  });

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
          {savedAllRecipes ? (
            <div
              className="save-recipes"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                recipeCollection.recipes.forEach((recipeTitle) => {
                  const [recipe] = recipes.filter(
                    (recipe) => recipe.title === recipeTitle
                  );
                  unsaveRecipe(recipe);
                });
              }}
            >
              <Bookmark className="bookmark-icon" />
              Saved
            </div>
          ) : (
            <div
              className="save-recipes"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                recipeCollection.recipes.forEach((recipeTitle) => {
                  const [recipe] = recipes.filter(
                    (recipe) => recipe.title === recipeTitle
                  );

                  // only save recipes that aren't already saved - avoid duplicates
                  if (
                    !user.savedRecipes.some(
                      (savedRecipe) => savedRecipe.title === recipe.title
                    )
                  ) {
                    saveRecipe(recipe);
                  }
                });
              }}
            >
              <BookmarkBorder className="bookmark-icon" />
              Save all {recipeCollection.recipes.length} Recipes
            </div>
          )}
        </div>
      </div>
    </StyledRecipeCollectionThumbnail>
  );
};

export { RecipeCollectionThumbnail };

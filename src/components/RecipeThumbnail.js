import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import { StyledRecipeThumbnail } from "../styles/RecipeThumbnail.styled";

const RecipeThumbnail = ({
  user,
  loggedIn,
  recipe,
  saveRecipe,
  unsaveRecipe,
  hideLogInPopup,
  showLogInPopup,
}) => {
  const saved = user.savedRecipes.some(
    (savedRecipe) => savedRecipe.title === recipe.title
  );
  return (
    <StyledRecipeThumbnail>
      <div className="recipe-thumbnail">
        <img
          src={require(`../assets/${recipe.img}`)}
          className="recipe-image"
          alt="recipe thumbnail"
        />
        <div className="thumbnail-content">
          <div className="thumbnail-main">
            <div className="title">{recipe.title}</div>
            <div className="author">{recipe.author}</div>
          </div>
          <div className="thumbnail-footer">
            <div className="time">{recipe.time}</div>
            <div
              className="save-recipe"
              onClick={
                loggedIn
                  ? (e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      hideLogInPopup();
                      saved ? unsaveRecipe(recipe) : saveRecipe(recipe);
                    }
                  : (e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      showLogInPopup();
                    }
              }
            >
              {user.savedRecipes.some(
                (savedRecipe) => savedRecipe.title === recipe.title
              ) ? (
                <div className="saved">
                  <Bookmark className="bookmark-icon" />
                </div>
              ) : (
                <div className="not-saved">
                  <BookmarkBorder className="bookmark-icon" />
                </div>
              )}
              {loggedIn ? (
                ""
              ) : (
                <div className="description-box-container">
                  <div className="log-in-sign-up">
                    <span onClick={showLogInPopup}>Log in</span> or{" "}
                    <span onClick={showLogInPopup}>Sign up</span> to save this
                    recipe.
                  </div>
                  <div className="arrow"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </StyledRecipeThumbnail>
  );
};

export { RecipeThumbnail };

import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import { StyledRecipeThumbnail } from "../styles/RecipeThumbnail.styled";

const RecipeThumbnail = (props) => {
  const handleSaveRecipe = () => {
    props.saveRecipe(props.recipe);
  };

  console.log(props.recipe.title);

  return (
    <StyledRecipeThumbnail>
      <div className="recipe-thumbnail">
        <img
          src={props.recipe.img}
          className="recipe-image"
          alt="recipe thumbnail"
        />
        <div className="thumbnail-content">
          <div className="thumbnail-main">
            <div className="title">{props.recipe.title}</div>
            <div className="author">{props.recipe.author}</div>
          </div>
          <div className="thumbnail-footer">
            <div className="time">{props.recipe.time}</div>
            {props.user.savedRecipes.some(
              (savedRecipe) => savedRecipe.title === props.recipe.title
            ) ? (
              <div
                className="saved"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleSaveRecipe();
                }}
              >
                <Bookmark className="bookmark-icon" />
              </div>
            ) : (
              <div
                className="not-saved"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleSaveRecipe();
                }}
              >
                <BookmarkBorder className="bookmark-icon" />
              </div>
            )}
          </div>
        </div>
      </div>
    </StyledRecipeThumbnail>
  );
};

export { RecipeThumbnail };

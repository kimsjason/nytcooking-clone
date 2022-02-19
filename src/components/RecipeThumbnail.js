import { BookmarkBorder } from "@mui/icons-material";
import { StyledRecipeThumbnail } from "../styles/RecipeThumbnail.styled";

const RecipeThumbnail = (props) => {
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
            <BookmarkBorder className="bookmark-icon" />
          </div>
        </div>
      </div>
    </StyledRecipeThumbnail>
  );
};

export { RecipeThumbnail };

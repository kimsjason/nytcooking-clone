import { StyledCookingGuideThumbnail } from "../styles/CookingGuideThumbnail.styled";

const CookingGuideThumbnail = (props) => {
  return (
    <StyledCookingGuideThumbnail>
      <div className="cooking-guide-thumbnail">
        <img
          className="cooking-guide-image"
          src={props.cookingGuide.img}
          alt="cooking guide thumbnail"
        />
        <div className="thumbnail-content">
          COOKING GUIDE
          <div className="title">{props.cookingGuide.title}</div>
          <div className="author">By {props.cookingGuide.author}</div>
        </div>
      </div>
    </StyledCookingGuideThumbnail>
  );
};

export { CookingGuideThumbnail };

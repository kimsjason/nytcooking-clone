import { StyledCookingGuideThumbnail } from "../styles/CookingGuideThumbnail.styled";

const CookingGuideThumbnail = ({ cookingGuide }) => {
  return (
    <StyledCookingGuideThumbnail>
      <div className="cooking-guide-thumbnail">
        <img
          className="cooking-guide-image"
          src={require(`../assets/${cookingGuide.img}`)}
          alt="cooking guide thumbnail"
        />
        <div className="thumbnail-content">
          COOKING GUIDE
          <div className="title">{cookingGuide.title}</div>
          <div className="author">By {cookingGuide.author}</div>
        </div>
      </div>
    </StyledCookingGuideThumbnail>
  );
};

export { CookingGuideThumbnail };

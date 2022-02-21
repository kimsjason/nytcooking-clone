import styled from "styled-components";

const StyledRecipeCollectionThumbnail = styled.div`
  .recipe-collection-thumbnail {
    display: flex;
    flex-direction: column;
    width: 475px;
    height: 500px;
    background: white;
    cursor: pointer;
  }

  .recipe-collection-image {
    object-fit: cover;
    height: 325px;
  }

  .thumbnail-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2.5rem;
  }

  .title {
    margin: 20px 0;
    text-align: center;
    font-size: 2.4rem;
  }

  .save-recipes {
    display: flex;
    align-items: center;
    padding: 0.75rem 1.2rem;
    border-radius: 3px;
    font-size: 1.4rem;
    color: white;
    background: #e33d26;
  }

  .save-recipes:hover {
    background: #c83c26;
  }

  .bookmark-icon {
    width: 2.5rem;
    height: auto;
  }
`;

export { StyledRecipeCollectionThumbnail };

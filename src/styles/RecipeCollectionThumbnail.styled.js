import styled from "styled-components";

const StyledRecipeCollectionThumbnail = styled.div`
  .recipe-collection-thumbnail {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 325px;
    background: white;
    cursor: pointer;
  }

  .recipe-collection-image {
    object-fit: cover;
    height: 195px;
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
    font-size: 1.7rem;
  }

  .save-recipes {
    display: flex;
    align-items: center;
    padding: 0.75rem 1.2rem;
    border-radius: 3px;
    font-size: 1.3rem;
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

  @media only screen and (min-width: 510px) {
    .recipe-collection-thumbnail {
      width: 360px;
      height: 390px;
    }

    .recipe-collection-image {
      height: 235px;
    }

    .title {
      font-size: 2.2rem;
    }

    .save-recipes {
      font-size: 1.4rem;
    }
  }

  @media only screen and (min-width: 1020px) {
    .recipe-collection-thumbnail {
      width: 475px;
      height: 500px;
    }

    .recipe-collection-image {
      height: 325px;
    }

    .title {
      font-size: 2.4rem;
    }
  }
`;

export { StyledRecipeCollectionThumbnail };

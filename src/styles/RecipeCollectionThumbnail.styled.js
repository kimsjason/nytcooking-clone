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
    position: relative;
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

  .save-recipes:hover .description-box-container {
    display: flex;
  }

  .description-box-container {
    display: none;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: absolute;
    width: 220px;
    left: -3rem;
    bottom: 4rem;
    color: #222222;
  }

  .description-box {
    margin-bottom: 1rem;
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
    border: 1px solid #ccc;
    padding: 1.5rem;
    background: #f2f3ef;
  }

  .description-box .title {
    margin-bottom: 1rem;
    font-weight: bold;
    font-size: 1.6rem;
  }

  .description {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-weight: normal;
  }

  .log-in-sign-up {
    font-weight: bold;
    font-size: 1.5rem;
  }

  .log-in-sign-up span {
    color: #e33d26;
  }

  .log-in-sign-up span:hover {
    text-decoration: underline;
  }

  .arrow {
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-top: 1rem solid #f2f3ef;
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

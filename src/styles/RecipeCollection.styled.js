import styled from "styled-components";

const StyledRecipeCollection = styled.div`
  .recipe-collection-page {
    display: flex;
    flex-direction: column;
    background: #fff;
    // border-bottom: 1px solid #e6e6e6;
  }

  .collection-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem 0;
  }

  .main-image {
    max-width: 335px;
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    text-align: center;
    font-size: 1.2rem;
    font-family: Arvo;
    font-weight: bold;
  }

  .collection-title {
    margin: 1rem;
    font-size: 2.4rem;
    font-family: "Sorts Mill Goudy";
    font-weight: normal;
  }

  .text .share-recipe {
    display: none;
  }

  .save-recipes {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 3.4rem;
    border-radius: 3px;
    font-size: 1.3rem;
    font-family: "Libre Franklin";
    font-weight: normal;
    color: white;
    background: #e33d26;
    cursor: pointer;
  }

  .save-recipes:hover {
    background: #c83c26;
  }

  .saved,
  .not-saved {
    display: flex;
    align-items: center;
    gap: 3px;
  }

  .bookmark-icon {
    width: 2.25rem;
    height: auto;
  }

  .collection-recipes-container {
    display: flex;
    justify-content: center;
    background: #f2f3ef;
  }

  .collection-recipes {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    padding: 4rem 0 5rem;
  }

  .collection-recipes::after {
    content: "";
    flex-basis: 142px;
    max-width: 142px;
  }

  .bottom-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem 0 5rem;
    font-size: 1.3rem;
    font-weight: bold;
    background: #f2f3ef;
  }

  .bottom-text .save-share {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .share-recipe {
    display: flex;
    gap: 0.9rem;
  }

  .share-recipe > * {
    width: 3.5rem;
    height: 3.5rem;
    padding: 0.8rem;
    border-radius: 50%;
    color: white;
    cursor: pointer;
  }

  .mail-icon {
    background: #b7b4b4;
  }

  .mail-icon:hover {
    background: #9b9b9b;
  }

  .pinterest-icon {
    background: #e34c5c;
  }

  .pinterest-icon:hover {
    background: #ce1810;
  }

  .facebook-icon {
    background: #6d81b8;
  }

  .facebook-icon:hover {
    background: #465a94;
  }

  .twitter-icon {
    background: #74b8ee;
  }

  .twitter-icon:hover {
    background: #4baaf4;
  }

  @media only screen and (min-width: 510px) {
    .main-image {
      max-width: 490px;
    }

    .collection-title {
      font-size: 2.8rem;
    }
  }

  @media only screen and (min-width: 765px) {
    .main-image {
      max-width: 600px;
    }

    .collection-title {
      font-size: 3.5rem;
    }

    .text .save-share {
      display: flex;
      gap: 4rem;
    }

    .text .share-recipe {
      display: flex;
    }

    .collection-recipes {
      gap: 2rem;
      width: 1000px;
    }
  }

  @media only screen and (min-width: 1020px) {
    .collection-header {
      flex-direction: row;
      justify-content: center;
    }

    .main-image {
      max-width: 490px;
    }

    .text {
      max-width: 505px;
      padding: 0 3rem;
    }
  }
`;

export { StyledRecipeCollection };

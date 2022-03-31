import styled from "styled-components";

const StyledRecipe = styled.div`
  position: ${(props) => (props.loggedIn ? "" : "fixed")};
  width: ${(props) => (props.loggedIn ? "" : "100%")};
  overflow: ${(props) => (props.loggedIn ? "" : "hidden")};

  .recipe-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
  }

  .recipe-content {
    display: flex;
    flex-direction: column;
    padding: 3rem 0;
  }

  .share-recipe {
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
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
    display: none;
    background: #74b8ee;
  }

  .twitter-icon:hover {
    background: #4baaf4;
  }

  .title {
    margin-bottom: 1.5rem;
    padding: 0 1.5rem;
    font-size: 3.4rem;
    font-family: "Sorts Mill Goudy";
  }

  .author {
    padding: 0 1.5rem;
    padding-bottom: 2.2rem;

    font-size: 1.5rem;
    font-weight: bold;
  }

  .yield-time-save-print {
    display: flex;
    flex-direction: column;
    padding: 0 1.5rem;
  }

  .yield-time-save-print > * {
  }

  .yield-and-time {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .yield,
  .time {
    display: flex;
    font-size: 1.2rem;
  }

  .yield span,
  .time span {
    width: 6rem;
    font-family: Arvo;
  }

  .save-print-recipe {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 3rem;
  }

  .save-recipe:hover,
  .print-recipe:hover {
    background: #c83c26;
  }

  .save-recipe {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 3.4rem;
    border-radius: 3px;
    font-size: 1.3rem;
    color: white;
    background: #e33d26;
    cursor: pointer;
  }

  .bookmark-icon {
    width: 2.5rem;
    height: auto;
  }

  .saved,
  .not-saved {
    display: flex;
    align-items: center;
  }

  .saved {
    padding-left: 1rem;
    margin-right: auto;
  }

  .print-recipe {
    display: none;
  }

  .image-and-description {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem 0;
    padding: 0 1.5rem;
  }

  .recipe-image {
    width: 100%;
    max-width: 600px;
    height: auto;
  }

  .credits {
    color: #aaaaaa;
  }

  .description {
    margin-top: 3rem;
    font-size: 1.7rem;
    font-family: "Sorts Mill Goudy";
  }

  .tags-and-ratings {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    padding: 1.5rem 0;
    border-top: 2px solid #222222;
    border-bottom: 1px solid #cccccc;
  }

  .tags {
    display: none;
  }

  .cooked-and-ratings {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 0 1.5rem;
    font-size: 1.2rem;
  }

  .mark-as-cooked {
    display: flex;
    align-items: center;
    font-weight: bold;
    cursor: pointer;
  }

  .mark-as-cooked:hover .check-icon {
    color: white;
    background: #b7b4b4;
  }

  .check-icon {
    width: 2rem;
    height: auto;
    margin-right: 1rem;
    border: 2px solid #b7b4b4;
    border-radius: 50%;
    padding: 1px;
    color: #b7b4b4;
  }

  .check-icon.cooked {
    color: white;
    background: #b7b4b4;
  }

  .cooked-and-ratings .divider {
    height: 3rem;
    border: 0.25px solid #b7b4b4;
  }

  .ratings {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .stars {
    display: flex;
    position: relative;
  }

  .stars > * {
    cursor: pointer;
    z-index: 25;
  }

  .star-icon,
  .star-border-icon {
    display: flex;
    width: 2.25rem;
    height: auto;
    z-index: 50;
    color: #ccc;
    pointer-events: none;
  }

  .star-icon {
    color: ${(props) => (props.recipeRating >= 4 ? "#e33d26" : "#fbaa2a")};
  }

  .stars-hover {
    text-align: center;
    position: absolute;
    bottom: -1.8rem;
    right: -3rem;
    width: 175px;
    height: 8rem;
    padding: 1.5rem 3rem;
    border: 1px solid #ccc;
    box-shadow: 0 0 4px rbga(0, 0, 0, 0.1);
    font-size: 1.4rem;
    background: white;
    z-index: 10;
  }

  .instructions-and-cooking-notes {
    display: flex;
    justify-content: space-between;
    gap: 5rem;
  }

  .ingredients-header,
  .preparation-header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    font-family: Arvo;
    font-size: 1.3rem;
    background: #f2f3ef;
  }

  .ingredients {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    padding: 4rem 1.5rem 0 8rem;
    font-size: 1.4rem;
    font-weight: bold;
  }

  .add-to-grocery-list {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 4rem;
    margin: 3.5rem auto;
    border: 1px solid #222222;
    border-radius: 3px;
    font-size: 1.4rem;
    cursor: pointer;
  }

  .add-to-grocery-list:hover {
    background: #222222;
    color: white;
  }

  .added {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    margin: 2rem 0;
    font-size: 1.4rem;
  }

  .open-grocery {
    font-weight: bold;
    color: #e33d26;
    cursor: pointer;
  }

  .open-grocery:hover {
    color: #c83c26;
  }

  .ingredient-substitution {
    margin-bottom: 5rem;
    text-align: center;
    font-size: 1.3rem;
    color: #e33d26;
    cursor: pointer;
  }

  .preparation {
    font-size: 1.8rem;
  }

  .steps {
    padding: 4rem 1.5rem;
    line-height: 2.5rem;
  }

  .step {
    margin-bottom: 3rem;
  }

  .step-number {
    padding-bottom: 1rem;
    font-weight: bold;
  }

  .mark-as-cooked-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 5rem 0;
    padding: 1.4rem;
    font-size: 1.5rem;
    font-weight: bold;
    background: #f2f3ef;
    cursor: pointer;
  }

  .mark-as-cooked-container:hover .check-icon {
    color: white;
    background: #b7b4b4;
  }

  .normal {
    white-space: pre;
    font-weight: normal;
  }

  .recommendations {
    display: flex;
    flex-direction: column;
    padding: 7.5rem;
  }

  .collection-header {
    font-size: 1.4rem;
    font-weight: bold;
    font-family: Arvo;
  }

  .close-icon {
    display: none;
  }

  .hidden {
    display: none;
  }

  @media only screen and (min-width: 370px) {
    .twitter-icon {
      display: block;
    }
  }

  @media only screen and (min-width: 400px) {
    .cooked-and-ratings .mark-as-cooked span {
      display: block;
      font-weight: normal;
    }
  }

  @media only screen and (min-width: 765px) {
    .title,
    .yield-time-save-print {
      padding: 0 3rem;
    }

    .author {
      padding-left: 3rem;
      padding-bottom: 0;
    }

    .yield-time-save-print {
      padding-top: 3rem;
    }

    .print-recipe {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4.5rem;
      height: 3.4rem;
      border-radius: 3px;
      background: #e33d26;
      color: white;
      cursor: pointer;
    }

    .print-icon {
      width: 2.5rem;
      height: auto;
    }

    .tags-and-ratings {
      justify-content: space-between;
      padding: 1.5rem;
      margin: 0 1.5rem;
    }

    .tags {
      display: flex;
    }

    .tag {
      white-space: pre;
      font-size: 1.5rem;
      color: #e33d26;
      cursor: pointer;
    }

    .tag:hover {
      color: #c83c26;
      text-decoration: underline;
    }

    .tag span {
      color: #222222;
    }

    .columns {
      display: flex;
    }

    .col-1 {
      flex: 1;
    }

    .col-2 {
      flex: 2;
    }

    .ingredients-header,
    .preparation-header {
      justify-content: flex-start;
      padding: 4rem 1.5rem 0;
      background: white;
    }

    .ingredients-header {
      padding-left: 3rem;
    }
  }

  @media only screen and (min-width: 1020px) {
    .recipe-content {
      width: 1000px;
    }

    .yield-time-save-print {
      flex-direction: row;
      justify-content: space-between;
    }

    .yield,
    .time {
      font-size: 1.5rem;
    }

    .save-print-recipe {
      margin-top: 0;
    }

    .save-print-recipe .share-recipe {
      display: none;
    }

    .recipe-content > .share-recipe {
      display: flex;
      padding: 0 3rem;
    }

    .title {
      font-size: 4.2rem;
    }

    .author {
      margin: 0 3rem;
      padding-left: 0;
      padding-bottom: 2.2rem;
      border-bottom: 1px solid #cccccc;
      font-size: 1.5rem;
    }

    .image-and-description {
      flex-direction: row;
      gap: 2rem;
    }

    .description {
      margin-top: 0;
    }

    .recipe-image {
      width: 600px;
    }

    .cooked-and-ratings {
      font-size: 1.5rem;
    }

    .mark-as-cooked span {
      display: inline-block;
      white-space: pre;
      font-weight: normal;
    }
  }
`;

export { StyledRecipe };

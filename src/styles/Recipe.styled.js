import styled from "styled-components";

const StyledRecipe = styled.div`
  .recipe-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    background: white;
  }

  .recipe-content {
    display: flex;
    flex-direction: column;
    width: 1000px;
  }

  .share-recipe {
    display: flex;
    justify-content: flex-end;
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

  .pinterest-icon {
    background: #e34c5c;
  }

  .facebook-icon {
    background: #6d81b8;
  }

  .twitter-icon {
    background: #74b8ee;
  }

  .title {
    margin-bottom: 1.5rem;
    font-size: 4.2rem;
    font-family: "Sorts Mill Goudy";
  }

  .author {
    padding-bottom: 2.2rem;
    border-bottom: 1px solid #cccccc;
    margin-bottom: 2.4rem;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .yield-time-save-print {
    display: flex;
    justify-content: space-between;
  }

  .yield-and-time {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .yield,
  .time {
    display: flex;
    font-size: 1.5rem;
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
    font-size: 1.4rem;
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

  .image-and-description {
    display: flex;
    justify-content: space-between;
    margin: 3rem 0;
  }

  .recipe-image {
    width: 600px;
  }

  .description {
    width: 370px;
    font-size: 1.7rem;
    font-family: "Sorts Mill Goudy";
  }

  .tags-and-ratings {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 3rem 0;
    padding: 1.5rem 0;
    border-top: 2px solid #222222;
    border-bottom: 1px solid #cccccc;
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

  .cooked-and-ratings {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .mark-as-cooked {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: normal;
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

  .mark-as-cooked span {
    white-space: pre;
    font-weight: bold;
  }

  .divider {
    height: 3rem;
    border: 0.25px solid #b7b4b4;
  }

  .ratings {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.5rem;
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

  .col-1 {
    flex: 1;
  }

  .col-2 {
    flex: 2;
  }

  .ingredients-header,
  .preparation-header {
    padding-bottom: 3rem;
    font-family: Arvo;
    font-size: 1.3rem;
  }

  .ingredients {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .add-to-grocery-list {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 4rem;
    margin: 3.5rem 0;
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
    font-size: 1.3rem;
    color: #e33d26;
    cursor: pointer;
  }

  .preparation {
    font-size: 1.8rem;
  }
  .steps {
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

  .cooking-notes {
    display: flex;
    flex-direction: column;
  }

  .cooking-notes-title {
    padding-bottom: 1rem;
    font-size: 1.3rem;
    font-family: Arvo;
  }

  .comment {
    display: flex;
    margin-bottom: 4rem;
    padding: 1.5rem;
    border: 1px solid #dddddd;
    font-family: "Libre Franklin";
  }

  .notes-header {
    display: flex;
    font-size: 1.6rem;
    border-bottom: 1px solid #cccccc;
    color: #666666;
  }

  .notes-header > * {
    padding: 1.6rem;
  }

  .recommendations {
    display: flex;
    flex-direction: column;
    width: 1000px;
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
`;

export { StyledRecipe };

import styled from "styled-components";

const StyledCollections = styled.div`
  .collections-carousel {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }

  .recipe-image {
    width: 100%;
    max-width: 600px;
    height: 320px;
    object-fit: cover;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 2rem 2rem 3rem;
    height: 200px;
    background: white;
  }

  .number-of-recipes {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -2.3rem;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    font-family: Arvo;
    font-weight: bold;
    font-size: 1.8rem;
    color: white;
    background: #e33d26;
  }

  .text .title {
    padding: 2rem 0;
    font-size: 2.3rem;
    font-family: "Sorts Mill Goudy";
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

  .bookmark-icon {
    width: 2.25rem;
    height: auto;
  }

  .carousel-buttons {
    align-self: stretch;
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 0;
    background: white;
  }

  .carousel-buttons > * {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: #ccc;
    cursor: pointer;
  }

  .collections-container {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
    padding: 3rem 0;
    background: #f2f3ef;
  }

  .collections-header {
    font-size: 1.5rem;
    border-top: 5px solid black;
  }

  .header-text {
    margin: 1rem 0 1.2rem;
  }

  .header-text span {
    font-weight: bold;
  }

  .filters {
    display: flex;
    gap: 1.5rem;
  }

  .filters > * {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3.4rem;
    padding: 0 2rem;
    border: 1px solid #222222;
    border-radius: 25px;
    font-weight: bold;
    font-size: 1.3rem;
  }

  .collections {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 3rem 0;
  }

  @media only screen and (min-width: 375px) {
    .recipe-image {
      height: 375px;
    }
  }

  @media only screen and (min-width: 510px) {
    .recipe-image {
      max-width: 800px;
    }

    .text .title {
      font-size: 2.8rem;
    }

    .carousel-buttons > * {
      width: 0.6rem;
      height: 0.6rem;
    }

    .collections-container {
      width: 490px;
    }

    .header-text {
      font-size: 1.9rem;
    }

    .filters {
      font-size: 1.3rem;
    }
  }

  @media only screen and (min-width: 765px) {
    .collections-carousel {
      flex-direction: row;
    }

    .collections-carousel > * {
      flex: 1;
      height: 375px;
    }

    .number-of-recipes {
      position: relative;
      top: 0;
      margin-top: 4rem;
    }

    .text {
      justify-content: center;
    }

    .carousel-buttons {
      flex-grow: 0;
      margin-top: auto;
    }

    .collections-container {
      width: 745px;
    }
  }

  @media only screen and (min-width: 1020px) {
    .recipe-image {
      height: 440px;
    }

    .collections-carousel > * {
      height: 440px;
    }

    .collections-container {
      width: 1000px;
    }

    .text .title {
      font-size: 3.3rem;
    }

    .collections {
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 3rem;
    }
  }
`;

export default StyledCollections;

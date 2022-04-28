import styled from "styled-components";

const StyledCookingGuides = styled.div`
  .cooking-guides-carousel {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }

  .image-container {
    display: flex;
    flex-direction: column;
  }

  .recipe-image {
    width: 100%;
    height: 100vw;
    object-fit: cover;
  }

  .text {
    width: 300px;
    margin: 0 auto;
    padding: 2rem 0;
    font-size: 2.8rem;
    font-family: "Sorts Mill Goudy";
    text-align: left;
  }

  .description {
    padding-top: 1rem;
    font-size: 2.3rem;
    color: #999999;
  }

  .description > * {
    font-style: italic;
    color: #e33d26;
  }

  .description > *:hover {
    text-decoration: underline;
  }

  .carousel-buttons {
    align-self: stretch;
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 0;
  }

  .carousel-buttons > * {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: #ccc;
    cursor: pointer;
    z-index: 1;
  }

  .carousel-buttons .selected {
    background: black;
  }

  .cooking-guides-container {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
    padding: 3rem 0;
    background: #f2f3ef;
  }

  .cooking-guides-header {
    padding-top: 1.2rem;
    border-top: 5px solid black;
    font-family: "Sorts Mill Goudy";
  }

  .cooking-guides-header .title {
    margin: 0 0 5px;
    font-size: 2.8rem;
    color: #222222;
  }

  .cooking-guides-header .subtitle {
    font-size: 2.3rem;
    color: #999999;
  }

  .cooking-guides {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    justify-content: center;
    padding: 4rem 0 5rem;

    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // gap: 1.5rem;
    // padding: 3rem 0;
  }

  @media only screen and (min-width: 375px) {
    .recipe-image {
      //   height: 375px;
    }
  }

  @media only screen and (min-width: 510px) {
    .recipe-image {
      height: auto;
      max-height: 100vh;
    }

    .carousel-buttons > * {
      width: 0.6rem;
      height: 0.6rem;
    }

    .text,
    .cooking-guides-container {
      width: 490px;
    }

    .cooking-guides {
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 2rem;
    }
  }

  @media only screen and (min-width: 765px) {
    .carousel-buttons {
      flex-grow: 0;
      margin-top: auto;
    }

    .text,
    .cooking-guides-container {
      width: 745px;
    }

    .cooking-guides {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media only screen and (min-width: 1020px) {
    .image-container {
      position: relative;
    }

    .image-container::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: linear-gradient(rgba(0, 0, 0, 0), black);
    }

    .text {
      position: absolute;
      bottom: 10%;
      left: 50%;
      transform: translateX(-50%);
      color: white;
    }

    .description {
      font-size: 2.8rem;
      color: #c9c9c9;
    }

    .carousel-buttons {
      position: absolute;
      left: 50%;
      bottom: 5%;
    }

    .carousel-buttons > * {
      background: white;
    }

    .carousel-buttons .selected {
      background: #e33d26;
    }

    .text,
    .cooking-guides-container {
      width: 1000px;
    }

    .cooking-guides {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default StyledCookingGuides;

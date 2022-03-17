import styled from "styled-components";

const StyledRecipeOfTheDay = styled.div`
  .recipe-of-the-day {
    display: flex;
    cursor: pointer;
  }

  .recipe-of-the-day:hover {
    box-shadow: 0 0 49px 15px rgb(0 0 0 / 20%);
  }

  .recipe-of-the-day a {
    flex: 1;
  }

  .recipe-of-the-day img {
    object-fit: cover;
    width: 100%;
    max-height: 85vh;
  }

  .recipe-info {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    background: white;
  }

  .recipe-title {
    margin-bottom: 1rem;
    text-align: center;
    font-size: 3.4rem;
    font-family: "Sorts Mill Goudy";
  }

  .recipe-subtitle {
    margin-bottom: 1.5rem;
    text-align: center;
    font-size: 1.7rem;
    font-family: "Sorts Mill Foudy";
  }

  .recipe-author {
    margin-top: 1rem;
    font-weight: bold;
    font-size: 1.4rem;
    font-family: "Libre Franklin";
  }

  .label {
    display: flex;
    align-items: center;
    position: absolute;
    top: -12px;
    border-radius: 25px;
    padding: 0.5rem 1rem;
    text-align: center;
    font-family: "Arvo";
    font-size: 1.1rem;
    font-weight: bold;
    color: white;
    background: #e33d26;
  }

  .save-share-recipe {
    display: none;
  }

  .save-recipe {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 170px;
    height: 3.8rem;
    margin-right: 0.7rem;
    border-radius: 3px;
    font-size: 1.3rem;
    color: white;
    background: #000000cc;
  }

  .bookmark-icon {
    width: 2.5rem;
    height: auto;
    margin-right: 0.3rem;
  }

  .save-recipe:hover .description-box-container {
    display: flex;
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

  .description-box-container {
    display: none;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: absolute;
    width: 220px;
    bottom: 4rem;
    color: #222222;
  }

  .description-box {
    margin-bottom: 1rem;
    padding: 1.5rem;
    background: #f2f3ef;
  }

  .title {
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

  .share-recipe {
    display: flex;
    gap: 0.7rem;
  }

  .facebook-icon,
  .pinterest-icon,
  .expand-icon {
    width: 3.8rem;
    height: 3.8rem;
    padding: 0.75rem;
    border-radius: 3px;
    color: white;
    background: #000000cc;
  }

  .save-recipe:hover,
  .facebook-icon:hover,
  .pinterest-icon:hover,
  .expand-icon:hover {
    background: #e33d26;
  }

  @media only screen and (min-width: 765px) {
    .recipe-of-the-day {
      position: relative;
    }

    .recipe-of-the-day:hover {
      box-shadow: none;
    }

    .recipe-label {
      position: absolute;
      bottom: 7rem;
      left: 10rem;
    }

    .recipe-info {
      width: 320px;
      height: 280px;
    }

    .recipe-subtitle {
      width: auto;
    }

    .label {
      top: -54px;
      right: -54px;
      width: 108px;
      height: 108px;
      border-radius: 50%;
    }

    .save-share-recipe {
      display: flex;
      position: absolute;
      bottom 1.5rem;
      right: 1.5rem;
    }
    }
  }
`;

export { StyledRecipeOfTheDay };

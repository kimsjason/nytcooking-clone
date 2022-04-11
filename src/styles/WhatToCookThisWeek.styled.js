import styled from "styled-components";

const StyledWhatToCookThisWeek = styled.div`
  .what-to-cook-this-week {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    margin: 0 auto;
  }

  .main-header {
    display: flex;
    flex-direction: column;
    padding: 3rem 0 1rem;
  }

  .main-header .title {
    font-family: "Arvo";
    font-weight: 400;
    font-size: 1.6rem;
  }

  .main-header .subtitle {
    display: none;
  }

  .editor-recommendations {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-top: 7px solid #222222;
    padding: 1.2rem 0;
  }

  .sub-header {
    display: flex;
    flex-direction: column;
  }

  .sub-header .title {
    margin-bottom: 0.5rem;
    font-size: 2.3rem;
    font-family: "Sorts Mill Goudy";
    color: #222222;
  }

  .sub-header .subtitle {
    font-size: 2.3rem;
    font-family: "Sorts Mill Goudy";
    color: #999999;
  }

  .recipes {
    display: flex;
    gap: 1rem;
    width: 100%;
    overflow: scroll;
    margin: 4rem 0;
    padding: 1rem;
  }

  .recipe-collections {
    align-self: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    overflow: scroll;
    margin: 4rem 0;
    padding: 1rem;
  }

  .recipe-collections::after {
    content: "";
    flex-basis: 300px;
    max-width: 300px;
  }

  .see-all-link {
    align-self: center;
  }

  .see-all {
    display: flex;
    justify-content: center;
    width: 235px;
    margin-bottom: 5rem;
    border: 1px solid #222222;
    border-radius: 3px;
    padding: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .see-all:hover {
    background: #222222;
    color: white;
  }

  @media only screen and (min-width: 510px) {
    .what-to-cook-this-week {
      width: 490px;
    }

    .main-header {
      text-align: center;
      padding: 5rem 0;
    }

    .main-header .subtitle {
      align-self: center;
    }

    .main-header .title {
      font-size: 3.2rem;
    }

    .main-header .subtitle {
      display: flex;
      margin-top: 0.5rem;
      font-family: "Sorts Mill Goudy";
      font-size: 1.3rem;
      font-weight: bold;
    }

    .sub-header .title {
      font-size: 2.8rem;
    }

    .recipe-collections {
      gap: 2rem;
    }
  }

  @media only screen and (min-width: 765px) {
    .what-to-cook-this-week {
      width: 745px;
    }

    .recipe-collections {
      padding: 0;
    }

    .recipe-collections::after {
      flex-basis: 360px;
      max-width: 360px;
    }
  }

  @media only screen and (min-width: 1020px) {
    .what-to-cook-this-week {
      width: 1000px;
    }

    .main-header .title {
      font-size: 3.6rem;
    }

    .recipe-collections::after {
      flex-basis: 475px;
      max-width: 475px;
    }
  }
`;

export { StyledWhatToCookThisWeek };

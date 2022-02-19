import styled from "styled-components";

const StyledWhatToCookThisWeek = styled.div`
  .what-to-cook-this-week {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1000px;
    margin: 0 auto;
    padding: 0 5rem;
  }

  .main-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 0;
  }

  .main-header .title {
    font-family: "Arvo";
    font-weight: 400;
    font-size: 3.8rem;
  }

  .main-header .subtitle {
    margin-top: 0.5rem;
    font-family: "Sorts Mill Goudy";
    font-size: 1.3rem;
    font-weight: bold;
  }

  .editor-recommendations {
    border-top: 7px solid #222222;
    padding: 1.2rem 0;
  }

  .sub-header {
    display: flex;
    flex-direction: column;
  }

  .sub-header .title {
    margin-bottom: 0.5rem;
    font-size: 2.8rem;
    font-family: "Sorts Mill Goudy";
    color: #222222;
  }

  .sub-header .subtitle {
    font-size: 2.8rem;
    font-family: "Sorts Mill Goudy";
    color: #999999;
  }

  .recipes {
    display: flex;
    gap: 25px;
    overflow: scroll;
    margin: 4rem 0;
    padding: 1rem;
  }
`;

export { StyledWhatToCookThisWeek };

import styled from "styled-components";

const StyledWhatToCookThisWeek = styled.div`
  .what-to-cook-this-week {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1000px;
    margin: 0 auto;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 7px solid #222222;
    padding: 1.2rem 0;
  }

  .sub-header {
    align-self: flex-start;
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
    gap: 1rem;
    width: 100%;
    overflow: scroll;
    margin: 4rem 0;
    padding: 1rem;
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
`;

export { StyledWhatToCookThisWeek };

import styled from "styled-components";

const StyledWeeknight = styled.div`
  .weeknight-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 300px;
    padding-top: 4.8rem;
  }

  .header {
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .header-title {
    font-size: 3.6rem;
    font-weight: bold;
    font-family: Arvo;
  }

  .header-caption {
    margin: 1rem 0 0.5rem;
    font-size: 1.6rem;
    font-family: "Sorts Mill Goudy";
  }

  .share-recipe {
    display: flex;
    justify-content: center;
    gap: 0.9rem;
    margin: 1rem 0 2rem;
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

  .collection-title {
    text-align: left;
    padding-top: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: Arvo;
    text-decoration: underline;
  }

  .recipes {
    display: flex;
    gap: 1rem;
    overflow: auto;
    width: 300px;
    padding: 1rem 0 4rem;
  }

  @media only screen and (min-width: 510px) {
    .weeknight-page,
    .recipes {
      width: 490px;
    }
  }

  @media only screen and (min-width: 765px) {
    .weeknight-page,
    .recipes {
      width: 745px;
    }
  }

  @media only screen and (min-width: 1020px) {
    .weeknight-page,
    .recipes {
      width: 1000px;
    }
  }
`;

export { StyledWeeknight };

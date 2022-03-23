import styled from "styled-components";

const StyledRecipeBox = styled.div`
  .recipe-box-page {
    display: flex;
    overflow: hidden;
  }

  // navigation styles
  .navigation {
    transition: min-width 0.7s;
    min-width: 100vw;
  }

  .search-container {
    display: flex;
    flex-direction: column;
    padding: 2.1rem 1.1rem;
    background: #f2f3ef;
  }

  .search,
  .add-new-recipe {
    height: 4rem;
    border: none;
    border-radius: 5rem;
    padding: 1rem 3.6rem;
    font-family: "Libre Franklin";
    font-size: 1.6rem;
    text-align: center;
    background: #fff;
  }

  .search {
    text-align: left;
  }

  .search::placeholder {
    text-align: center;
    color: #ccc;
  }

  .search:focus {
    outline: none;
    border: 1px solid #666666;
  }

  // sidebar styles
  .sidebar .web {
    display: none;
  }

  .sidebar .mobile {
    display: flex;
    flex-direction: column;
    background: #fff;
    font-size: 1.7rem;
  }

  .sidebar .mobile > * {
    display: flex;
    gap: 1rem;
    padding: 2rem;
    border-bottom: 1px solid #e1e1e1;
    color: #222222;
    cursor: pointer;
  }

  .play-icon,
  .clock-icon,
  .calendar-icon,
  .bookmark-icon {
    width: 2.5rem;
    height: auto;
    color: #bdbdbd;
  }

  .title {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .count {
    display: flex;
    align-items: center;
    color: #666666;
    font-size: 1.5rem;
  }

  .chevron-right-icon,
  .chevron-left-icon {
    width: 2rem;
    height: auto;
  }

  // content styles
  .page-view {
    display: flex;
    flex-direction: column;
    background: #f2f3ef;
    min-width: 100vw;
  }

  .collapse {
    overflow: hidden;
    min-width: 0;
    height: 0;
  }

  .header {
    margin: 0 3.8rem 1.5rem;
  }

  .header .web {
    display: none;
  }

  .previous-page {
    display: flex;
    align-items: center;
    padding: 1.8rem 0;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    white-space: pre;
  }

  .view-title {
    display: flex;
    padding-left: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #e6e6e6;
    font-size: 1.5rem;
    font-weight: bold;
    white-space: pre;
  }

  .recipes {
    align-self: center;
    display: flex;
    justify-content: center;
    gap: 1rem;
    width: 310px;
    flex-wrap: wrap;
    padding: 2rem 0;
  }

  .recipes::after {
    content: "";
    flex-basis: 142px;
    flex-grow: 0;
    flex-shrink: 0;
    max-width: 142px;
  }

  .hidden {
    display: none;
  }

  @media only screen and (min-width: 510px) {
    .recipes {
      width: 510px;
    }
  }
  @media only screen and (min-width: 600px) {
    // sidebar styles
    .navigation {
      min-width: 239px;
      border-right: 1px solid #e1e1e1;
      background: #fff;
    }

    .navigation .search-container {
      display: none;
    }

    .sidebar .mobile {
      display: none;
    }

    .sidebar .web {
      display: flex;
      flex-direction: column;
      background: #fff;
    }

    .sidebar .web > * {
      display: flex;
      gap: 1rem;
      // margin: 0 1.5rem;
      padding: 2rem;
      border-bottom: 1px solid #e1e1e1;
      color: #222222;
      cursor: pointer;
      font-size: 1.5rem;
    }

    .sidebar .web > *:hover {
      font-weight: bold;
    }

    .sidebar .cooking-guides {
      background: ${(props) =>
        props.pageViewTitle === "Cooking Guides" ? "#f2f3ef" : ""};
      font-weight: ${(props) =>
        props.pageViewTitle === "Cooking Guides" ? "bold" : ""};
      color: ${(props) =>
        props.pageViewTitle === "Cooking Guides" ? "black" : ""};

      .play-icon {
        color: ${(props) =>
          props.pageViewTitle === "Cooking Guides" ? "black" : ""};
      }
    }

    .sidebar .recently-viewed {
      background: ${(props) =>
        props.pageViewTitle === "Recently Viewed" ? "#f2f3ef" : ""};
      font-weight: ${(props) =>
        props.pageViewTitle === "Recently Viewed" ? "bold" : ""};
      color: ${(props) =>
        props.pageViewTitle === "Recently Viewed" ? "black" : ""};

      .clock-icon {
        color: ${(props) =>
          props.pageViewTitle === "Recently Viewed" ? "black" : ""};
      }
    }

    .sidebar .weekly-plan {
      background: ${(props) =>
        props.pageViewTitle === "Weekly Plan" ? "#f2f3ef" : ""};
      font-weight: ${(props) =>
        props.pageViewTitle === "Weekly Plan" ? "bold" : ""};
      color: ${(props) =>
        props.pageViewTitle === "Weekly Plan" ? "black" : ""};

      .calendar-icon {
        color: ${(props) =>
          props.pageViewTitle === "Weekly Plan" ? "black" : ""};
      }
    }

    .sidebar .saved-recipes {
      background: ${(props) =>
        props.pageViewTitle === "Saved Recipes" ? "#f2f3ef" : ""};
      font-weight: ${(props) =>
        props.pageViewTitle === "Saved Recipes" ? "bold" : ""};
      color: ${(props) =>
        props.pageViewTitle === "Saved Recipes" ? "black" : ""};

      .bookmark-icon {
        color: ${(props) =>
          props.pageViewTitle === "Saved Recipes" ? "black" : ""};
      }
    }

    .sidebar .selected {
      background: #f2f3ef;
      font-weight: bold;
      color: black;
    }

    .count {
      font-size: 1.2rem;
    }

    .chevron-right-icon {
      display: none;
    }

    // page view styles
    .page-view {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-width: 0;
      overflow: scroll;
    }

    .header .mobile {
      display: none;
    }

    .header .web {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
    }

    .header .inputs {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 2rem;
      border-bottom: 1px solid #e6e6e6;
    }

    .page-view-info {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin: 2.5rem 0 1rem;
    }

    .page-view-title {
      font-size: 2.3rem;
      font-weight: bold;
    }

    .recipe-count {
      font-size: 1.5rem;
      color: #666666;
    }

    .search,
    .add-new-recipe {
      width: 300px;
    }

    .add-new-recipe {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #666666;
      cursor: pointer;
    }

    .recipes {
      width: 310px;
      overflow: scroll;
    }

    .recipes::after {
      flex-basis: 235px;
      max-width: 235px;
    }
  }

  @media only screen and (min-width: 835px) {
    .header .inputs {
      flex-direction: row;
      justify-content: space-between;
    }

    .search {
      width: 275px;
    }

    .add-new-recipe {
      width: 175px;
      font-size: 1.2rem;
      padding: 0 1rem;
    }

    .recipes {
      width: 510px;
    }
  }

  @media only screen and (min-width: 1000px) {
    .recipes {
      width: 765px;
    }
  }

  @media only screen and (min-width: 1255px) {
    .recipes,
    .header .web {
      width: 1020px;
    }
  }
`;

export default StyledRecipeBox;

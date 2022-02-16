import styled from "styled-components";

const StyledHeader = styled.div`
  & .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #cccccc;
    color: #666666;
  }

  & .nyt-cooking-logo {
    display: flex;
    align-self: stretch;
    padding: 1.5rem 4.5rem 1.5rem 2.5rem;
    border-right: 1px solid #cccccc;
  }

  & .search {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
  }

  & .search-icon {
    width: 25px;
    height: 25px;
    color: #9b9b9b;
  }

  & .search-bar {
    flex: 1;
    border: none;
    padding: 5px;
    font-size: 1.8rem;
    font-family: "Libre Franklin";
    color: #666666;
  }

  & .search-bar:focus {
    outline: none;
  }

  .weeknight,
  .grocery-list {
    align-self: stretch;
    display: flex;
    align-items: center;
    margin: 0 1.2rem;
    text-align: center;
    font-weight: bold;
    font-size: 1.1rem;
  }

  .weeknight:hover,
  .grocery-list:hover {
    margin-top: 4px;
    border-bottom: 4px solid #666666;
  }

  .recipe-box-container {
    align-self: stretch;
    display: flex;
    align-items: center;
    border: 1px solid #cccccc;
    border-radius: 2.5px 2.5px 0 0;
    border-bottom: none;
    margin-top: 1rem;
    padding: 0 2rem;
    cursor: pointer;
  }

  .recipe-box-container:hover {
    background: #f2f3ef;
  }

  .recipe-box {
    margin-bottom: 1rem;
    text-align: center;
    font-weight: bold;
    font-size: 1.1rem;
    color: #e33d26;
  }

  .recipe-box:hover {
    color: #c83c26;
  }

  .settings {
    align-self: stretch;
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
  }

  .settings-icon {
    width: 20px;
    height: 20px;
    color: #9b9b9b;
  }

  .settings:hover .settings-icon {
    color: #e33d26;
  }
`;

export { StyledHeader };

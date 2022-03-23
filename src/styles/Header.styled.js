import styled from "styled-components";

const StyledHeader = styled.div`
  z-index: 50;

  .header {
    position: fixed;
    width: 100%;
    top: 0;
    border-bottom: 1px solid #cccccc;
    background: white;
  }

  .header-web {
    display: none;
  }

  .header-mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    position: relative;
    height: 44px;
    padding: 0 1rem;
  }

  .nyt-cooking-logo svg {
    width: 130px;
    height: 24px;
  }

  .nyt-cooking-logo path {
    fill: black;
  }

  .recipe-box-and-search {
    display: flex;
    gap: 1rem;
  }

  .divider {
    border-right: 1px solid #ccc;
  }

  .menu-icon,
  .close-icon,
  .search-icon {
    width: 2.5rem;
    height: auto;
    color: black;
    cursor: pointer;
  }

  .recipe-box-icon {
    width: 2.25rem;
    height: auto;
    cursor: pointer;
  }

  .menu-icon:hover,
  .close-icon:hover,
  .recipe-box-icon:hover,
  .search-icon:hover {
    color: #e33d26;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 45px;
    left: 0;
    width: 255px;
    height: 100vh;
    background: rgba(25, 25, 25, 0.97);
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    padding-left: 1.2rem;
  }

  .nav-links > *:not(:last-child) {
    border-bottom: 1px solid rgb(78, 78, 78);
  }

  .nav-links > * {
    padding: 2.2rem 0;
  }

  .nav-links .recipe-box {
    color: #e33d26;
    font-size: 1.7rem;
  }

  .nav-links .grocery-list {
    cursor: pointer;
  }

  .account {
    margin-top: 7rem;
    padding-left: 1.2rem;
    color: #999999;
    cursor: pointer;
  }

  .your-account {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 2.2rem 0;
  }

  .log-out {
    margin-top: 1.5rem;
  }

  .log-in-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin: 3.5rem 1rem 0;
    padding: 1.5rem;
    background: white;
    color: black;
    text-align: center;
    font-size: 1.3rem;
    font-weight: normal;
  }

  .create-recipe-box,
  .log-in {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 207px;
    height: 33.5px;
    border-radius: 3px;
    cursor: pointer;
  }

  .create-recipe-box {
    background: #e33d26;
    font-weight: bold;
    color: white;
  }

  .log-in {
    border: 1px solid black;
  }

  .hidden {
    display: none;
  }

  @media only screen and (min-width: 1024px) {
    .header-mobile {
      display: none;
    }

    .header-web {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 61px;
      color: #666666;
    }

    .nyt-cooking-logo {
      display: flex;
      align-self: stretch;
      padding: 1.5rem 4.5rem 1.5rem 2.5rem;
      border-right: 1px solid #cccccc;
    }

    .nyt-cooking-logo svg {
      width: 168px;
      height: auto;
    }

    .nyt-cooking-logo path {
      fill: #e33d26;
    }

    .extended-search-container {
      flex: 1;
      align-self: stretch;
      display: flex;
      position: relative;
    }

    .search {
      display: flex;
      align-items: center;
      width: 325px;
      padding: 0 1.5rem;
      background: white;
      transition: 0.5s width;
      z-index: 10;
    }

    .search-icon {
      width: 25px;
      height: 25px;
      color: #9b9b9b;
    }

    .expanded {
      width: 100%;
    }

    .search-bar {
      flex: 1;
      border: none;
      padding: 5px;
      font-size: 1.8rem;
      font-family: "Libre Franklin";
      color: #666666;
    }

    .search-bar:focus {
      outline: none;
    }

    .close-icon {
      position: absolute;
      right: 2rem;
      width: 2rem;
      height: auto;
      padding: 1px;
      border-radius: 50%;
      background: #ccc;
      color: white;
      opacity: 0;
      transition: opacity 1s;
      cursor: pointer;
    }

    .fade-in {
      opacity: 1;
    }

    .tabs {
      display: flex;
      position: absolute;
      right: 0;
      height: 100%;
    }

    .weeknight,
    .grocery-list,
    .subscribe {
      align-self: stretch;
      display: flex;
      align-items: center;
      margin: 0 1.2rem;
      text-align: center;
      font-weight: bold;
      font-size: 1.1rem;
      cursor: pointer;
    }

    .subscribe {
      margin: 0 2.5rem;
      color: #e33d26;
    }

    .weeknight:hover,
    .grocery-list:hover {
      margin-top: 4px;
      border-bottom: 4px solid #666666;
    }

    .search-results-preview {
      display: flex;
      flex-direction: column;
      position: absolute;
      width: 100%;
      top: 61px;
      right: -1px;
      border: 1px solid #cccccc;
      border-top: none;
      background: #f2f3ef;
      box-sizing: content-box;
    }

    .search-result {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 1.5rem;
      font-size: 2rem;
      cursor: pointer;
    }

    .search-result:hover {
      background: #767676;
      color: white;
    }

    .bold {
      font-weight: bold;
    }

    .recipe-image-icon {
      width: 5rem;
      height: auto;
    }

    .subscribe:hover {
      margin-top: 4px;
      border-bottom: 4px solid #e33d26;
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
      align-self: flex-start;
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      padding-top: 1.35rem;
      text-align: center;
      font-weight: bold;
      font-size: 1.1rem;
      color: #e33d26;
    }

    .recipe-box:hover {
      color: #c83c26;
    }

    .recipe-box span {
      font-weight: normal;
      color: #222222;
    }

    .recipe-box .your {
      color: #e33d26;
      font-weight: bold;
    }

    .settings {
      align-self: stretch;
      display: flex;
      align-items: center;
      position: relative;
      padding: 0 1.5rem;
      cursor: pointer;
    }

    .settings-icon {
      width: 20px;
      height: 20px;
      color: #9b9b9b;
    }

    .settings:hover .settings-icon {
      color: #e33d26;
    }

    .settings:hover .settings-expanded {
      display: flex;
    }

    .settings-expanded {
      display: none;
      flex-direction: column;
      position: absolute;
      width: 156px;
      bottom: -80px;
      right: 2.5rem;
      font-size: 1.2rem;
      background: #f2f3ef;
      z-index: 10;
    }

    .settings-expanded > * {
      width: 100%;
      height: 4rem;
      padding: 0.8rem 1.5rem;
      border: 1px solid #ccc;
      cursor: pointer;
    }

    .hidden {
      display: none;
    }
  }

  @media only screen and (min-width: 1200px) {
    .grocery-list span,
    .recipe-box span {
      display: inline-block;
    }
  }
`;

export { StyledHeader };

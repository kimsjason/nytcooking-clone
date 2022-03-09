import { Link } from "react-router-dom";
import { StyledHeader } from "../styles/Header.styled";
import { ReactComponent as Logo } from "../assets/nyt-cooking-logo.svg";
import { Close, Search, Settings } from "@mui/icons-material";

const Header = ({ loggedIn, signOutUser, showLogInPopup, showGroceryList }) => {
  const expandSearchBar = () => {
    const search = document.querySelector(".search");
    const closeIcon = search.querySelector(".close-icon");
    search.classList.add("expanded");
    closeIcon.classList.add("fade-in");
  };

  // collapse search bar
  document.addEventListener("click", (e) => {
    if (e.target.className !== "search-bar") {
      const search = document.querySelector(".search");
      const closeIcon = search.querySelector(".close-icon");
      search.classList.remove("expanded");
      closeIcon.classList.remove("fade-in");
    }
  });

  return (
    <StyledHeader>
      <div className="header">
        <Link to="/" className="nyt-cooking-logo">
          <Logo />
        </Link>
        <div className="extended-search-container">
          <div className="search">
            <Search className="search-icon" />
            <input
              type="text"
              className="search-bar"
              placeholder="What would you like to cook?"
              onClick={expandSearchBar}
            />
            <Close className="close-icon" />
          </div>

          <div className="tabs">
            <Link to="/weeknight" className="weeknight">
              WEEKNIGHT
            </Link>
            <div
              className="grocery-list"
              onClick={loggedIn ? showGroceryList : showLogInPopup}
            >
              YOUR GROCERY LIST
            </div>
          </div>
        </div>

        <div className="recipe-box-container" onClick={showLogInPopup}>
          <Link to="/recipe-box" className="recipe-box">
            YOUR RECIPE BOX
            {loggedIn ? "" : <span>Log In</span>}
          </Link>
        </div>
        {loggedIn ? (
          <div className="settings">
            <Settings className="settings-icon" />
            <div className="settings-expanded">
              <div className="account">Manage Your Account</div>
              <div className="log-out" onClick={signOutUser}>
                Log Out
              </div>
            </div>
          </div>
        ) : (
          <Link to="/subscribe" className="subscribe">
            SUBSCRIBE
          </Link>
        )}
      </div>
    </StyledHeader>
  );
};

export default Header;

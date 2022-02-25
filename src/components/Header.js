import { useState } from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "../styles/Header.styled";
import Settings from "@mui/icons-material/Settings";
import { ReactComponent as Logo } from "../assets/nyt-cooking-logo.svg";
import { Search } from "@mui/icons-material";

const Header = (props) => {
  const [searchSelected, setSearchSelected] = useState(false);

  const signOutUser = () => {
    props.signOutUser();
  };

  const expandSearchBar = () => {
    setSearchSelected(true);
  };

  // collapse search bar
  document.addEventListener("click", (e) => {
    if (e.target.className !== "search-bar") {
      setSearchSelected(false);
    }
  });

  const setDisplayLogInPopup = () => {
    props.setDisplayLogInPopup(true);
  };

  return (
    <StyledHeader searchSelected={searchSelected}>
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
          </div>

          <div className="tabs">
            <Link to="/weeknight" className="weeknight">
              WEEKNIGHT
            </Link>
            <Link
              to="/grocery-list"
              className="grocery-list"
              onClick={setDisplayLogInPopup}
            >
              YOUR GROCERY LIST
            </Link>
          </div>
        </div>

        <div className="recipe-box-container" onClick={setDisplayLogInPopup}>
          <Link to="/recipe-box" className="recipe-box">
            YOUR RECIPE BOX
            {props.loggedIn ? "" : <span>Log In</span>}
          </Link>
        </div>
        {props.loggedIn ? (
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

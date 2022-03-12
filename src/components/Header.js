import { useState } from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "../styles/Header.styled";
import { ReactComponent as Logo } from "../assets/nyt-cooking-logo.svg";
import { Close, Search, Settings } from "@mui/icons-material";
import reactStringReplace from "react-string-replace";

const Header = ({
  loggedIn,
  recipes,
  signOutUser,
  showLogInPopup,
  hideLogInPopup,
  showGroceryList,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const expandSearchBar = () => {
    const search = document.querySelector(".search");
    const closeIcon = search.querySelector(".close-icon");
    search.classList.add("expanded");
    closeIcon.classList.add("fade-in");
  };

  document.addEventListener("click", (e) => {
    // collapse search bar when clicking outside of search bar
    if (e.target.className !== "search-bar") {
      const search = document.querySelector(".search");
      const closeIcon = search.querySelector(".close-icon");
      search.classList.remove("expanded");
      closeIcon.classList.remove("fade-in");
    }

    // hide search results when clicking outside of search bar
    if (
      e.target.className !== "search-result" ||
      e.target.className !== "search-bar"
    ) {
      const searchResultsPreview = document.querySelector(
        ".search-results-preview"
      );
      searchResultsPreview.classList.add("hidden");
    }
  });

  const searchRecipes = (searchQuery) => {
    const searchResults = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(searchResults);
  };

  const showSearchResults = () => {
    const searchResults = document.querySelector(".search-results-preview");
    searchResults.classList.remove("hidden");
  };

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
              onChange={(e) => {
                setSearchQuery(e.target.value);
                searchRecipes(e.target.value);
                if (searchResults.length > 0) {
                  showSearchResults();
                }
              }}
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
          <div className="search-results-preview hidden">
            {searchResults.slice(0, 5).map((searchResult) => {
              return (
                <Link
                  to={`/recipe/${searchResult.title}`}
                  className="search-result"
                >
                  <img
                    src={require(`../assets/${searchResult.img}`)}
                    alt=""
                    className="recipe-image-icon"
                  />
                  <div className="search-result-title">
                    {reactStringReplace(
                      searchResult.title,
                      searchQuery,
                      (match, i) => {
                        return <span className="bold">{match}</span>;
                      }
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div
          className="recipe-box-container"
          onClick={loggedIn ? hideLogInPopup : showLogInPopup}
        >
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

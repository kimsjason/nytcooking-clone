import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StyledHeader } from "../styles/Header.styled";
import { ReactComponent as Logo } from "../assets/nyt-cooking-logo.svg";
import { Close, Inbox, Menu, Search, Settings } from "@mui/icons-material";
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

  let navigate = useNavigate();

  const searchRecipes = (searchQuery) => {
    const searchResults = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(searchResults);
  };

  // DOM functions
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

  const showSearchResults = () => {
    const searchResults = document.querySelector(".search-results-preview");
    searchResults.classList.remove("hidden");
  };

  const showSideBar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("hidden");
  };

  const hideSideBar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.add("hidden");
  };

  const toggleMenuIcon = () => {
    const menuIcon = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(".close-icon");
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  };

  return (
    <StyledHeader>
      <div className="header">
        <div className="header-mobile">
          <Menu
            className="menu-icon"
            onClick={() => {
              toggleMenuIcon();
              showSideBar();
            }}
          />
          <Close
            className="close-icon hidden"
            onClick={() => {
              toggleMenuIcon();
              hideSideBar();
            }}
          />
          <Link to="/" className="nyt-cooking-logo">
            <Logo />
          </Link>
          <div className="recipe-box-and-search">
            <Inbox
              className="recipe-box-icon"
              onClick={
                loggedIn ? () => navigate("/recipe-box") : showLogInPopup
              }
            />
            <div className="divider"></div>
            <Search className="search-icon" />
          </div>
          <div className="sidebar hidden">
            <div className="nav-links">
              <Link to="/">
                <div
                  className="home"
                  onClick={() => {
                    toggleMenuIcon();
                    hideSideBar();
                  }}
                >
                  HOME
                </div>
              </Link>
              <Link to="/weeknight">
                <div
                  className="weeknight"
                  onClick={() => {
                    toggleMenuIcon();
                    hideSideBar();
                  }}
                >
                  WEEKNIGHT
                </div>
              </Link>
              <div
                className="grocery-list"
                onClick={() => {
                  toggleMenuIcon();
                  hideSideBar();
                  showGroceryList();
                }}
              >
                YOUR GROCERY LIST
              </div>
              {loggedIn ? (
                <Link to="/recipe-box">
                  <div
                    className="recipe-box"
                    onClick={() => {
                      toggleMenuIcon();
                      hideSideBar();
                    }}
                  >
                    Your Recipe Box
                  </div>
                </Link>
              ) : (
                ""
              )}
            </div>
            {loggedIn ? (
              <div className="account">
                <div
                  className="your-account"
                  onClick={() => {
                    toggleMenuIcon();
                    hideSideBar();
                  }}
                >
                  <Settings className="settings-icon" />
                  YOUR ACCOUNT
                </div>
                <div
                  className="log-out"
                  onClick={() => {
                    toggleMenuIcon();
                    hideSideBar();
                    signOutUser();
                  }}
                >
                  Log Out
                </div>
              </div>
            ) : (
              <div className="log-in-box">
                Save and organize your favorite recipes.
                <div
                  className="create-recipe-box"
                  onClick={() => {
                    toggleMenuIcon();
                    hideSideBar();
                    showLogInPopup();
                  }}
                >
                  Create Your Recipe Box
                </div>
                <div
                  className="log-in"
                  onClick={() => {
                    toggleMenuIcon();
                    hideSideBar();
                    showLogInPopup();
                  }}
                >
                  Log In
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="header-web">
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
                <span className="your hidden">YOUR </span>GROCERY LIST
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
            onClick={loggedIn ? () => navigate("/recipe-box") : showLogInPopup}
          >
            <div className="recipe-box">
              <div className="main-text">
                <span className="your hidden">YOUR </span> RECIPE BOX
              </div>
              {loggedIn ? "" : <span>Log In</span>}
            </div>
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
      </div>
    </StyledHeader>
  );
};

export default Header;

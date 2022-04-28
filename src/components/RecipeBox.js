import {
  AccessTime,
  Add,
  Bookmark,
  CalendarToday,
  ChevronLeft,
  ChevronRight,
  PlayCircleOutline,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StyledRecipeBox from "../styles/RecipeBox.styled";
import { CookingGuideThumbnail } from "./CookingGuideThumbnail";
import { RecipeThumbnail } from "./RecipeThumbnail";

const RecipeBox = ({
  user,
  loggedIn,
  recipes,
  cookingGuides,
  setCurrentPage,
  saveRecipe,
  unsaveRecipe,
  hideLogInPopup,
  showLogInPopup,
}) => {
  const [pageViewTitle, setPageViewTitle] = useState("Saved Recipes");
  const [pageViewRecipes, setPageViewRecipes] = useState(
    user.savedRecipes || []
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    loggedIn ? hideLogInPopup() : showLogInPopup();
    setCurrentPage("recipe-box");
  }, []);

  // DOM functions for mobile
  const collapseNavigation = () => {
    const navigation = document.querySelector(".navigation");
    navigation.classList.add("collapse");
  };

  const expandNavigation = () => {
    const navigation = document.querySelector(".navigation");
    navigation.classList.remove("collapse");
  };

  const showPageView = () => {
    const pageView = document.querySelector(".page-view");
    pageView.classList.remove("hidden");
  };

  const hidePageView = () => {
    // Add timeout for a smooth transition effect
    setTimeout(() => {
      const pageView = document.querySelector(".page-view");
      pageView.classList.add("hidden");
    }, 500);
  };

  return (
    <StyledRecipeBox pageViewTitle={pageViewTitle}>
      <div className="recipe-box-page">
        <div className="navigation">
          <div className="search-container">
            <input
              type="text"
              className="search"
              placeholder="Search Your Recipe Box"
            />
          </div>
          <div className="sidebar">
            <div className="mobile">
              <div
                className="cooking-guides"
                onClick={() => {
                  setPageViewTitle("Cooking Guides");
                  setPageViewRecipes(cookingGuides);
                  collapseNavigation();
                  showPageView();
                }}
              >
                <div className="title">
                  <PlayCircleOutline className="play-icon" />
                  Cooking Guides
                </div>
                <div className="count">
                  {cookingGuides.length}
                  <ChevronRight className="chevron-right-icon" />
                </div>
              </div>
              <div
                className="recently-viewed"
                onClick={() => {
                  setPageViewTitle("Recently Viewed");
                  setPageViewRecipes([]);
                  collapseNavigation();
                  showPageView();
                }}
              >
                <div className="title">
                  <AccessTime className="clock-icon" />
                  Recently Viewed
                </div>
                <div className="count">
                  <ChevronRight className="chevron-right-icon" />
                </div>
              </div>
              <div
                className="weekly-plan"
                onClick={() => {
                  setPageViewTitle("Weekly Plan");
                  setPageViewRecipes([]);
                  collapseNavigation();
                  showPageView();
                }}
              >
                <div className="title">
                  <CalendarToday className="calendar-icon" />
                  Weekly Plan
                </div>
                <div className="count">
                  <ChevronRight className="chevron-right-icon" />
                </div>
              </div>
              <div
                className="saved-recipes"
                onClick={() => {
                  setPageViewTitle("Saved Recipes");
                  setPageViewRecipes(user.savedRecipes || []);
                  collapseNavigation();
                  showPageView();
                }}
              >
                <div className="title">
                  <Bookmark className="bookmark-icon" />
                  Saved Recipes
                </div>
                <div className="count">
                  {user.savedRecipes.length}
                  <ChevronRight className="chevron-right-icon" />
                </div>
              </div>
            </div>
            <div className="web">
              <div
                className="cooking-guides"
                onClick={(e) => {
                  setPageViewTitle("Cooking Guides");
                  setPageViewRecipes(cookingGuides);
                  showPageView();
                }}
              >
                <div className="title">
                  <PlayCircleOutline className="play-icon" />
                  Cooking Guides
                </div>
                <div className="count">
                  {cookingGuides.length}
                  <ChevronRight className="chevron-right-icon" />
                </div>
              </div>
              <div
                className="recently-viewed"
                onClick={() => {
                  setPageViewTitle("Recently Viewed");
                  setPageViewRecipes([]);
                  showPageView();
                }}
              >
                <div className="title">
                  <AccessTime className="clock-icon" />
                  Recently Viewed
                </div>
                <div className="count">
                  <ChevronRight className="chevron-right-icon" />
                </div>
              </div>
              <div
                className="weekly-plan"
                onClick={() => {
                  setPageViewTitle("Weekly Plan");
                  setPageViewRecipes([]);
                  showPageView();
                }}
              >
                <div className="title">
                  <CalendarToday className="calendar-icon" />
                  Weekly Plan
                </div>
                <div className="count">
                  <ChevronRight className="chevron-right-icon" />
                </div>
              </div>
              <div
                className="saved-recipes"
                onClick={() => {
                  setPageViewTitle("Saved Recipes");
                  setPageViewRecipes(user.savedRecipes || []);
                  showPageView();
                }}
              >
                <div className="title">
                  <Bookmark className="bookmark-icon" />
                  Saved Recipes
                </div>
                <div className="count">
                  {user.savedRecipes.length}
                  <ChevronRight className="chevron-right-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-view hidden">
          <div className="header">
            <div className="mobile">
              <div
                className="previous-page"
                onClick={() => {
                  expandNavigation();
                  hidePageView();
                }}
              >
                <ChevronLeft className="chevron-left-icon" />
                YOUR RECIPE BOX
              </div>
              <div className="view-title">{pageViewTitle}</div>
            </div>
            <div className="web">
              <div className="inputs">
                <div className="search-container">
                  <input
                    type="text"
                    className="search"
                    placeholder="Search Your Recipe Box"
                  />
                </div>
                <div className="add-new-recipe">
                  <Add className="add-icon" />
                  Add a Non-NYT Recipe
                </div>
              </div>
              <div className="page-view-info">
                <div className="page-view-title">{pageViewTitle}</div>
                <div className="recipe-count">
                  {pageViewRecipes.length} recipes
                </div>
              </div>
            </div>
          </div>
          <div className="recipes">
            {pageViewRecipes.map((recipe) => {
              if (pageViewTitle === "Cooking Guides") {
                return (
                  <Link
                    to={`/cooking-guide/${recipe.title}`}
                    key={recipe.title}
                  >
                    <CookingGuideThumbnail cookingGuide={recipe} />;
                  </Link>
                );
              }
              return (
                <Link key={recipe.id} to={`/recipe/${recipe.title}`}>
                  <RecipeThumbnail
                    user={user}
                    loggedIn={loggedIn}
                    recipe={recipe}
                    saveRecipe={saveRecipe}
                    unsaveRecipe={unsaveRecipe}
                    hideLogInPopup={hideLogInPopup}
                    showLogInPopup={showLogInPopup}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </StyledRecipeBox>
  );
};

export default RecipeBox;

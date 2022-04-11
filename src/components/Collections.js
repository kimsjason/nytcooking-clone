import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StyledCollections from "../styles/Collections.styled";
import { RecipeCollectionThumbnail } from "./RecipeCollectionThumbnail";

const Collections = ({
  user,
  loggedIn,
  recipes,
  recipeCollections,
  setCurrentPage,
  saveRecipe,
  unsaveRecipe,
  showLogInPopup,
  hideLogInPopup,
}) => {
  const [carouselSelection, setCarouselSelection] = useState(
    recipeCollections[0]
  );

  useEffect(() => {
    setCurrentPage("collections");
    window.scrollTo(0, 0);
  }, []);

  const savedAllRecipes = carouselSelection.recipes.every((recipeTitle) => {
    return user.savedRecipes.some(
      (savedRecipe) => savedRecipe.title === recipeTitle
    );
  });

  return (
    <StyledCollections carouselSelection={carouselSelection}>
      <div className="collections-carousel">
        <Link to={`/collection/${carouselSelection.title}`}>
          <div className="image-container">
            <img
              src={require(`../assets/${carouselSelection.img}`)}
              alt=""
              className="recipe-image"
            />
          </div>
        </Link>
        <div className="text">
          <div className="number-of-recipes">
            {carouselSelection.recipes.length}
          </div>
          <Link to={`/collection/${carouselSelection.title}`}>
            <div className="title">{carouselSelection.title}</div>
          </Link>

          {savedAllRecipes ? (
            <div
              className="save-recipes"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                carouselSelection.recipes.forEach((recipeTitle) => {
                  const [recipe] = recipes.filter(
                    (recipe) => recipe.title === recipeTitle
                  );
                  unsaveRecipe(recipe);
                });
              }}
            >
              <Bookmark className="bookmark-icon" />
              Saved
            </div>
          ) : (
            <div
              className="save-recipes"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();

                if (loggedIn) {
                  carouselSelection.recipes.forEach((recipeTitle) => {
                    const [recipe] = recipes.filter(
                      (recipe) => recipe.title === recipeTitle
                    );

                    // only save recipes that aren't already saved - avoid duplicates
                    if (
                      !user.savedRecipes.some(
                        (savedRecipe) => savedRecipe.title === recipe.title
                      )
                    ) {
                      saveRecipe(recipe);
                    }
                  });
                  hideLogInPopup();
                } else {
                  showLogInPopup();
                }
              }}
            >
              <BookmarkBorder className="bookmark-icon" />
              Save all {carouselSelection.recipes.length} Recipes
            </div>
          )}
          <div className="carousel-buttons">
            <div
              className="collection"
              style={
                carouselSelection === recipeCollections[0]
                  ? { background: "black" }
                  : null
              }
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setCarouselSelection(recipeCollections[0]);
              }}
            ></div>
            <div
              className="collection"
              style={
                carouselSelection === recipeCollections[1]
                  ? { background: "black" }
                  : null
              }
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setCarouselSelection(recipeCollections[1]);
              }}
            ></div>
            <div
              className="collection"
              style={
                carouselSelection === recipeCollections[2]
                  ? { background: "black" }
                  : null
              }
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setCarouselSelection(recipeCollections[2]);
              }}
            ></div>
            <div
              className="collection"
              style={
                carouselSelection === recipeCollections[3]
                  ? { background: "black" }
                  : null
              }
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setCarouselSelection(recipeCollections[3]);
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="collections-container">
        <div className="collections-header">
          <div className="header-text">
            Explore <span>{recipeCollections.length}</span> Editors' Collections
          </div>
          <div className="filters">
            <div className="all">All</div>
            <div className="most-popular">Most Popular</div>
            <div className="more">More</div>
          </div>
        </div>
        <div className="collections">
          {recipeCollections.map((recipeCollection) => {
            return (
              <Link
                to={`/collection/${recipeCollection.title}`}
                key={recipeCollection.title}
              >
                <RecipeCollectionThumbnail
                  user={user}
                  loggedIn={loggedIn}
                  recipes={recipes}
                  recipeCollection={recipeCollection}
                  saveRecipe={saveRecipe}
                  unsaveRecipe={unsaveRecipe}
                  showLogInPopup={showLogInPopup}
                  hideLogInPopup={hideLogInPopup}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </StyledCollections>
  );
};

export default Collections;

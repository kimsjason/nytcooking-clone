import { useState } from "react";
import { StyledRecipe } from "../styles/Recipe.styled";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  Bookmark,
  BookmarkBorder,
  Check,
  Facebook,
  Mail,
  Pinterest,
  Print,
  Star,
  StarBorder,
  Twitter,
} from "@mui/icons-material";
import CookingNotes from "./CookingNotes";

const Recipe = ({
  loggedIn,
  user,
  recipes,
  setCurrentPage,
  setLastViewedRecipe,
  addToGroceryList,
  saveRecipe,
  unsaveRecipe,
  rateRecipe,
  unrateRecipe,
  markCooked,
  unmarkCooked,
  addPublicNote,
  addPrivateNote,
  likeNote,
  showLogInPopup,
  hideLogInPopup,
  showGroceryList,
}) => {
  const recipeTitle = useParams().recipe;
  const [recipe] = recipes.filter((recipe) => recipe.title === recipeTitle);

  const [hoverOneStar, setHoverOneStar] = useState(false);
  const [hoverTwoStar, setHoverTwoStar] = useState(false);
  const [hoverThreeStar, setHoverThreeStar] = useState(false);
  const [hoverFourStar, setHoverFourStar] = useState(false);
  const [hoverFiveStar, setHoverFiveStar] = useState(false);

  const recipeRating = Math.round(
    recipe.ratings.reduce((sum, x) => sum + x.rating, 0) / recipe.ratings.length
  );

  const userRecipeRating = user.ratedRecipes.some(
    (ratedRecipe) => ratedRecipe.title === recipe.title
  )
    ? parseInt(
        user.ratedRecipes.filter(
          (ratedRecipe) => ratedRecipe.title === recipe.title
        )[0].rating
      )
    : 0;

  useEffect(() => {
    loggedIn ? hideLogInPopup() : showLogInPopup();
  });

  useEffect(() => {
    setLastViewedRecipe(recipe);
    setCurrentPage("recipe");
    window.scrollTo(0, 0);
  }, []);

  // DOM functions
  const showRatingsText = () => {
    const starsHover = document.querySelector(".stars-hover");
    starsHover.classList.remove("hidden");
  };

  const hideRatingsText = () => {
    const starsHover = document.querySelector(".stars-hover");
    starsHover.classList.add("hidden");
  };

  return (
    <StyledRecipe loggedIn={loggedIn} recipeRating={recipeRating}>
      <div className="recipe-page">
        <div className="recipe-content">
          <div className="share-recipe hidden">
            <Mail className="mail-icon" />
            <Pinterest className="pinterest-icon" />
            <Facebook className="facebook-icon" />
            <Twitter className="twitter-icon" />
          </div>
          <div className="recipe-information">
            <div className="title">{recipe.title}</div>
            <div className="author"> By {recipe.author}</div>
            <div className="yield-time-save-print">
              <div className="yield-and-time">
                <div className="yield">
                  <span>YIELD</span> {recipe.yield}
                </div>
                <div className="time">
                  <span>TIME</span> {recipe.time}
                </div>
              </div>
              <div className="save-print-recipe">
                <div
                  className="save-recipe"
                  onClick={() => {
                    const saved = user.savedRecipes.some(
                      (savedRecipe) => savedRecipe.title === recipe.title
                    );
                    saved ? unsaveRecipe(recipe) : saveRecipe(recipe);
                  }}
                >
                  {user.savedRecipes.some(
                    (savedRecipe) => savedRecipe.title === recipe.title
                  ) ? (
                    <div className="saved">
                      <Bookmark className="bookmark-icon" />
                      Saved
                    </div>
                  ) : (
                    <div className="not-saved">
                      <BookmarkBorder className="bookmark-icon" />
                      Save To Recipe Box
                    </div>
                  )}
                </div>
                <div className="print-recipe">
                  <Print className="print-icon" onClick={window.print} />
                </div>
                <div className="share-recipe">
                  <Mail className="mail-icon" />
                  <Pinterest className="pinterest-icon" />
                  <Facebook className="facebook-icon" />
                  <Twitter className="twitter-icon" />
                </div>
              </div>
            </div>
            <div className="image-and-description">
              <div className="image-container">
                <img
                  className="recipe-image"
                  src={require(`../assets/${recipe.img}`)}
                  alt={`${recipe.title}`}
                />
                <div className="credits">{recipe.credits} </div>
              </div>
              <div className="description">{recipe.description}</div>
            </div>
          </div>
          <div className="tags-and-ratings">
            <div className="tags">
              {recipe.tags.map((tag) => {
                return (
                  <div key={tag} className="tag">
                    {tag}
                    {recipe.tags.indexOf(tag) === recipe.tags.length - 1 ? (
                      ""
                    ) : (
                      <span className="tag">, </span>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="cooked-and-ratings">
              {user.cookedRecipes.some(
                (cookedRecipe) => cookedRecipe.title === recipe.title
              ) ? (
                <div
                  className="mark-as-cooked"
                  onClick={() => unmarkCooked(recipe)}
                >
                  <Check className="check-icon cooked" /> Cooked
                </div>
              ) : (
                <div
                  className="mark-as-cooked"
                  onClick={() => markCooked(recipe)}
                >
                  <Check className="check-icon" />{" "}
                  <span className="hidden"> Mark as </span>Cooked
                </div>
              )}
              <span className="divider"></span>
              <div className="ratings">
                {recipe.ratings.length} ratings
                <div className="stars">
                  <div
                    className="1-star"
                    onMouseOver={() => {
                      setHoverOneStar(true);
                      showRatingsText();
                    }}
                    onMouseOut={() => {
                      setHoverOneStar(false);
                      hideRatingsText();
                    }}
                    onClick={(e) => {
                      const rated = user.ratedRecipes.some(
                        (ratedRecipe) => ratedRecipe.title === recipe.title
                      );
                      const rating = parseInt(e.target.dataset.rating);
                      rated ? unrateRecipe(recipe) : rateRecipe(recipe, rating);
                    }}
                    data-rating="1"
                  >
                    {recipeRating >= 1 ||
                    userRecipeRating >= 1 ||
                    hoverOneStar ||
                    hoverTwoStar ||
                    hoverThreeStar ||
                    hoverFourStar ||
                    hoverFiveStar ? (
                      <Star className="star-icon" />
                    ) : (
                      <StarBorder className="star-border-icon" />
                    )}
                  </div>
                  <div
                    className="2-star"
                    onMouseOver={() => {
                      setHoverTwoStar(true);
                      showRatingsText();
                    }}
                    onMouseOut={() => {
                      setHoverTwoStar(false);
                      hideRatingsText();
                    }}
                    onClick={(e) => {
                      const rated = user.ratedRecipes.some(
                        (ratedRecipe) => ratedRecipe.title === recipe.title
                      );
                      const rating = parseInt(e.target.dataset.rating);
                      rated ? unrateRecipe(recipe) : rateRecipe(recipe, rating);
                    }}
                    data-rating="2"
                  >
                    {recipeRating >= 2 ||
                    userRecipeRating >= 2 ||
                    hoverTwoStar ||
                    hoverThreeStar ||
                    hoverFourStar ||
                    hoverFiveStar ? (
                      <Star className="star-icon" />
                    ) : (
                      <StarBorder className="star-border-icon" />
                    )}
                  </div>
                  <div
                    className="3-star"
                    onMouseOver={() => {
                      setHoverThreeStar(true);
                      showRatingsText();
                    }}
                    onMouseOut={() => {
                      setHoverThreeStar(false);
                      hideRatingsText();
                    }}
                    onClick={(e) => {
                      const rated = user.ratedRecipes.some(
                        (ratedRecipe) => ratedRecipe.title === recipe.title
                      );
                      const rating = parseInt(e.target.dataset.rating);
                      rated ? unrateRecipe(recipe) : rateRecipe(recipe, rating);
                    }}
                    data-rating="3"
                  >
                    {recipeRating >= 3 ||
                    userRecipeRating >= 3 ||
                    hoverThreeStar ||
                    hoverFourStar ||
                    hoverFiveStar ? (
                      <Star className="star-icon" />
                    ) : (
                      <StarBorder className="star-border-icon" />
                    )}
                  </div>
                  <div
                    className="4-star"
                    onMouseOver={() => {
                      setHoverFourStar(true);
                      showRatingsText();
                    }}
                    onMouseOut={() => {
                      setHoverFourStar(false);
                      hideRatingsText();
                    }}
                    onClick={(e) => {
                      const rated = user.ratedRecipes.some(
                        (ratedRecipe) => ratedRecipe.title === recipe.title
                      );
                      const rating = parseInt(e.target.dataset.rating);
                      rated ? unrateRecipe(recipe) : rateRecipe(recipe, rating);
                    }}
                    data-rating="4"
                  >
                    {recipeRating >= 4 ||
                    userRecipeRating >= 4 ||
                    hoverFourStar ||
                    hoverFiveStar ? (
                      <Star className="star-icon" />
                    ) : (
                      <StarBorder className="star-border-icon" />
                    )}
                  </div>
                  <div
                    className="5-star"
                    onMouseOver={() => {
                      setHoverFiveStar(true);
                      showRatingsText();
                    }}
                    onMouseOut={() => {
                      setHoverFiveStar(false);
                      hideRatingsText();
                    }}
                    onClick={(e) => {
                      const rated = user.ratedRecipes.some(
                        (ratedRecipe) => ratedRecipe.title === recipe.title
                      );
                      const rating = parseInt(e.target.dataset.rating);
                      rated ? unrateRecipe(recipe) : rateRecipe(recipe, rating);
                    }}
                    data-rating="5"
                  >
                    {recipeRating === 5 ||
                    userRecipeRating === 5 ||
                    hoverFiveStar ? (
                      <Star className="star-icon" />
                    ) : (
                      <StarBorder className="star-border-icon" />
                    )}
                  </div>
                  <div className="stars-hover hidden">
                    <div className="star-text">
                      {hoverFiveStar
                        ? "Delicious!"
                        : hoverFourStar
                        ? "Really Good"
                        : hoverThreeStar
                        ? "Good"
                        : hoverTwoStar
                        ? "Fine"
                        : hoverOneStar
                        ? "Not Worth It"
                        : ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="col-1">
              <div className="ingredients-container">
                <div className="ingredients-header">INGREDIENTS</div>
                <div className="ingredients">
                  {recipe.ingredients.map((ingredient) => {
                    return (
                      <div key={ingredient} className="ingredient">
                        {ingredient}
                      </div>
                    );
                  })}
                </div>
              </div>
              {user.groceryList.some(
                (groceryRecipe) => groceryRecipe.title === recipe.title
              ) ? (
                <div className="added">
                  Added <div className="divider"></div>
                  <div className="open-grocery" onClick={showGroceryList}>
                    Open Grocery List
                  </div>
                </div>
              ) : (
                <div
                  className="add-to-grocery-list"
                  onClick={() => addToGroceryList(recipe)}
                >
                  Add to Your Grocery List
                </div>
              )}

              <div className="ingredient-substitution">
                Ingredient Substitution Guide
              </div>
            </div>
            <div className="col-2">
              <div className="preparation">
                <div className="preparation-header">PREPARATION</div>
                <div className="steps">
                  {recipe.instructions.map((step) => {
                    return (
                      <div key={step} className="step">
                        <div className="step-number">
                          Step {recipe.instructions.indexOf(step) + 1}
                        </div>
                        {step}
                      </div>
                    );
                  })}
                </div>
              </div>

              {user.cookedRecipes.some(
                (cookedRecipe) => cookedRecipe.title === recipe.title
              ) ? (
                <div className="mark-as-cooked-container">
                  You've Cooked This
                  <div
                    className="mark-as-cooked"
                    onClick={() => unmarkCooked(recipe)}
                  >
                    <Check className="check-icon cooked" /> Cooked
                  </div>
                </div>
              ) : (
                <div className="mark-as-cooked-container">
                  Have you cooked this?
                  <div
                    className="mark-as-cooked"
                    onClick={() => markCooked(recipe)}
                  >
                    <Check className="check-icon" />
                    <span className="normal">Mark as </span> Cooked
                  </div>
                </div>
              )}
              <CookingNotes
                user={user}
                recipe={recipe}
                addPrivateNote={addPrivateNote}
                addPublicNote={addPublicNote}
                likeNote={likeNote}
              />
            </div>
          </div>
        </div>
      </div>
    </StyledRecipe>
  );
};

export default Recipe;

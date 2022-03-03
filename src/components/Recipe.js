import { StyledRecipe } from "../styles/Recipe.styled";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import {
  Bookmark,
  BookmarkBorder,
  Check,
  Facebook,
  Mail,
  Pinterest,
  Print,
  StarBorder,
  Twitter,
} from "@mui/icons-material";
import { CookingNote } from "./CookingNote";
import { LogInPopup } from "./LogInPopup";

const Recipe = (props) => {
  const location = useLocation();
  const { recipe } = location.state || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSaveRecipe = () => {
    props.saveRecipe(recipe);
  };

  const handleAddToGroceryList = () => {
    props.addToGroceryList(recipe);
  };

  const handleMarkCooked = () => {
    props.markCooked(recipe);
  };

  return (
    <StyledRecipe>
      {!props.loggedIn ? (
        <LogInPopup className="log-in-popup" signIn={props.signIn} />
      ) : (
        ""
      )}
      <div className="recipe-page">
        <div className="recipe-content">
          <div className="share-recipe">
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
                <div className="save-recipe" onClick={handleSaveRecipe}>
                  {props.user.savedRecipes.some(
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
              </div>
            </div>
            <div className="image-and-description">
              <img
                className="recipe-image"
                src={recipe.img}
                alt={`${recipe.title}`}
              />
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
              {props.user.cookedRecipes.some(
                (cookedRecipe) => cookedRecipe.title === recipe.title
              ) ? (
                <div className="mark-as-cooked" onClick={handleMarkCooked}>
                  <Check className="check-icon cooked" /> Cooked
                </div>
              ) : (
                <div className="mark-as-cooked" onClick={handleMarkCooked}>
                  <Check className="check-icon" /> Mark as <span> Cooked</span>
                </div>
              )}
              <span className="divider"></span>
              <div className="ratings">
                {recipe.ratings.length} ratings
                <div className="stars">
                  <StarBorder className="star-icon" />
                  <StarBorder className="star-icon" />
                  <StarBorder className="star-icon" />
                  <StarBorder className="star-icon" />
                  <StarBorder className="star-icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="instructions-and-cooking-notes">
            <div className="col-1">
              <div className="ingredients-container">
                <div className="ingredients-header">INGREDIENTS</div>
                <div className="ingredients">
                  {recipe.ingredients.map((ingredient) => {
                    return <div className="ingredient">{ingredient}</div>;
                  })}
                </div>
              </div>
              {props.user.groceryList.some(
                (groceryRecipe) => groceryRecipe.title === recipe.title
              ) ? (
                <div className="added">
                  Added <div className="divider"></div>
                  <div className="open-grocery" onClick={props.showGroceryList}>
                    Open Grocery List
                  </div>
                </div>
              ) : (
                <div
                  className="add-to-grocery-list"
                  onClick={handleAddToGroceryList}
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
                      <div className="step">
                        <div className="step-number">
                          Step {recipe.instructions.indexOf(step) + 1}
                        </div>
                        {step}
                      </div>
                    );
                  })}
                </div>
              </div>

              {props.user.cookedRecipes.some(
                (cookedRecipe) => cookedRecipe.title === recipe.title
              ) ? (
                <div className="mark-as-cooked-container">
                  You've Cooked This
                  <div className="mark-as-cooked" onClick={handleMarkCooked}>
                    <Check className="check-icon cooked" /> Cooked
                  </div>
                </div>
              ) : (
                <div className="mark-as-cooked-container">
                  Have you cooked this?
                  <div className="mark-as-cooked" onClick={handleMarkCooked}>
                    <Check className="check-icon" /> Mark as{" "}
                    <span> Cooked</span>
                  </div>
                </div>
              )}

              <div className="cooking-notes">
                <div className="cooking-notes-title">COOKING NOTES</div>
                <input
                  className="comment"
                  type="text"
                  placeholder="Share your notes with other cooks or leave a private note."
                />
                <div className="notes-container">
                  <div className="notes-header">
                    <div className="all">All</div>
                    <div className="most-helpful">Most Helpful</div>
                    <div className="private">Private</div>
                  </div>
                  <div className="notes">
                    {recipe.notes.map((note) => {
                      return <CookingNote note={note} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recommendations">
        <div className="collection">
          <div className="collection-header">TRENDING ON COOKING</div>
          <div className="collection-recipes"></div>
        </div>
        <div className="collection">
          <div className="collection-header">YOU RECENTLY VIEWED</div>
          <div className="collection-recipes"></div>
        </div>
      </div>
      ;
    </StyledRecipe>
  );
};

export default Recipe;

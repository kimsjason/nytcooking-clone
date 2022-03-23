import {
  Bookmark,
  BookmarkBorder,
  Facebook,
  Mail,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { StyledRecipeCollection } from "../styles/RecipeCollection.styled";
import { RecipeThumbnail } from "./RecipeThumbnail";

const RecipeCollection = ({
  user,
  loggedIn,
  recipeCollections,
  saveRecipe,
  unsaveRecipe,
  showLogInPopup,
  hideLogInPopup,
}) => {
  const collectionTitle = useParams().collection;
  const [collection] = recipeCollections.filter(
    (collection) => collection.title === collectionTitle
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StyledRecipeCollection>
      <div className="recipe-collection-page">
        <div className="collection-header">
          <img
            src={require(`../assets/${collection.img}`)}
            alt="main recipe collection pic"
            className="main-image"
          />
          <div className="text">
            EDITOR'S COLLECTION
            <div className="collection-title">{collection.title}</div>
            <div className="save-share">
              <div className="save-recipes" onClick={saveRecipe}>
                <div className="not-saved">
                  <BookmarkBorder className="bookmark-icon" />
                  Save All {collection.recipes.length} Recipes
                </div>
              </div>
              <div className="share-recipe">
                <Mail className="mail-icon" />
                <Pinterest className="pinterest-icon" />
                <Facebook className="facebook-icon" />
                <Twitter className="twitter-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="collection-recipes-container">
          <div className="collection-recipes">
            {collection.recipes.map((recipe) => {
              return (
                <RecipeThumbnail
                  key={recipe.title}
                  user={user}
                  loggedIn={loggedIn}
                  recipe={recipe}
                  saveRecipe={saveRecipe}
                  unsaveRecipe={unsaveRecipe}
                  hideLogInPopup={hideLogInPopup}
                  showLogInPopup={showLogInPopup}
                />
              );
            })}
          </div>
        </div>
        <div className="bottom-text">
          <div className="caption">Like this collection?</div>
          <div className="save-share">
            <div className="save-recipes" onClick={saveRecipe}>
              <div className="not-saved">
                <BookmarkBorder className="bookmark-icon" />
                Save All {collection.recipes.length} Recipes
              </div>
            </div>
            <div className="share-recipe">
              <Mail className="mail-icon" />
              <Pinterest className="pinterest-icon" />
              <Facebook className="facebook-icon" />
              <Twitter className="twitter-icon" />
            </div>
          </div>
        </div>
      </div>
    </StyledRecipeCollection>
  );
};

export default RecipeCollection;

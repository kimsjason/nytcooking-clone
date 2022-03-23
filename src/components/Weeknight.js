import { Facebook, Mail, Pinterest, Twitter } from "@mui/icons-material";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { StyledWeeknight } from "../styles/Weeknight.styled";
import { RecipeThumbnail } from "./RecipeThumbnail";

const Weeknight = ({
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
  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentPage("Weeknight");
  }, []);

  return (
    <StyledWeeknight>
      <div className="weeknight-page">
        <div className="header">
          <div className="header-title">Easy Weeknight Recipes</div>
          <div className="header-caption">
            Whether you've got 10 minutes or an hour, we've got you covered with
            loads of delicious recipes for a school (or work) night.
          </div>
          <div className="share-recipe">
            <Mail className="mail-icon" />
            <Pinterest className="pinterest-icon" />
            <Facebook className="facebook-icon" />
            <Twitter className="twitter-icon" />
          </div>
        </div>
        <div className="weeknight-collections">
          {recipeCollections.map((recipeCollection) => {
            return (
              <div key={recipeCollection.title} className="collection">
                <div className="collection-title">{recipeCollection.title}</div>
                <div className="recipes">
                  {recipeCollection.recipes.map((recipeTitle) => {
                    const [recipe] = recipes.filter(
                      (recipe) => recipe.title === recipeTitle
                    );
                    return (
                      <Link key={recipe.id} to={`/recipe/${recipe.title}`}>
                        <RecipeThumbnail
                          user={user}
                          loggedIn={loggedIn}
                          recipe={recipe}
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
            );
          })}
        </div>
      </div>
    </StyledWeeknight>
  );
};

export default Weeknight;

import { ChevronRight, Close } from "@mui/icons-material";
import { StyledGroceryList } from "../styles/GroceryList.styled";

const GroceryList = ({
  user,
  hideGroceryList,
  removeGroceryRecipe,
  removeGroceryIngredient,
}) => {
  const groceryList = user.groceryList;

  const handleRemoveGroceryRecipe = (e) => {
    removeGroceryRecipe(e);
  };

  const handleRemoveGroceryIngredient = (e) => {
    removeGroceryIngredient(e);
  };

  const handleExpandGroceryItem = (e) => {
    const recipe = e.target.closest(".recipe");

    const arrowIcon = recipe.querySelector(".arrow-icon");
    const servings = recipe.querySelector(".yield");
    const ingredients = recipe.querySelector(".ingredients");

    arrowIcon.classList.toggle("rotated");
    servings.classList.toggle("hidden");
    ingredients.classList.toggle("expanded");
  };

  return (
    <StyledGroceryList className="grocery-list-popup hidden">
      <div className="overlay" onClick={hideGroceryList}>
        <div
          className="content"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <div className="header">
            YOUR GROCERY LIST
            <div className="divider"></div>
            <div className="recipe-count">{groceryList.length} recipes</div>
          </div>
          <div className="grocery-list">
            {groceryList.length > 0 ? (
              groceryList.map((recipe) => {
                return (
                  <div key={recipe.title} className="recipe">
                    <div className="main">
                      <ChevronRight
                        className="arrow-icon"
                        onClick={handleExpandGroceryItem}
                      />
                      <div className="title-and-yield">
                        <div className="title">{recipe.title}</div>
                        <div className="yield hidden">{recipe.yield}</div>
                      </div>
                      <div
                        className="remove"
                        onClick={handleRemoveGroceryRecipe}
                      >
                        Remove
                      </div>
                    </div>
                    <div className="ingredients">
                      {recipe.ingredients.map((ingredient) => {
                        return (
                          <div key={ingredient} className="ingredient">
                            {ingredient}
                            <Close
                              className="remove-ingredient"
                              onClick={handleRemoveGroceryIngredient}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="caption">
                <div className="title">Build Your Grocery List</div>
                <div className="text">
                  Add recipes you plan to cook. Adjust what you need to buy,
                  then export your list.
                </div>
              </div>
            )}
          </div>
          {groceryList.length > 0 ? (
            <div className="footer">
              <div className="email">Email</div>
              <div className="done" onClick={hideGroceryList}>
                Done
              </div>
            </div>
          ) : (
            <div className="footer">
              <div className="done" onClick={hideGroceryList}>
                Done
              </div>
            </div>
          )}
        </div>
      </div>
    </StyledGroceryList>
  );
};

export default GroceryList;

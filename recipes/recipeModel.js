const db = require("../data/dbConfig");

module.exports = {
  getRecipes,
  getShoppingList
  //   getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
  return db("recipe_ingredients")
    .join(
      "ingredients",
      "ingredients.ingredient_id",
      "=",
      "recipe_ingredients.ingredient_id"
    )
    .where({ recipe_id: id })
    .select(
      "recipe_ingredients.quantity",
      "recipe_ingredients.UOM",
      "ingredients.ingredient_name"
    );
}

const express = require("express");
const Recipes = require("./recipeModel");
const router = express.Router();

module.exports = router;

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: "server error" });
    });
});

router.get("/:id", (req, res) => {
  const id = req.body.params;
  Recipes.getShoppingList(id)
    .then(data => {
      console.log(data, "data from get list");
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ message: "server error" });
    });
});

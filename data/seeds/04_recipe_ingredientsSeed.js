exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([
        { recipe_id: 2, ingredient_id: 1, UOM: "oz", quantity: 0.5 },
        { recipe_id: 2, ingredient_id: 2, UOM: "tblsp", quantity: 2 }
      ]);
    });
};

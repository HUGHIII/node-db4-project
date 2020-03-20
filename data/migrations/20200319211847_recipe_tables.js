exports.up = function(knex) {
  return knex.schema

    .createTable("recipes", tbl => {
      tbl.increments("recipe_id");
      tbl.string("recipe_name", 128).notNullable();
    })

    .createTable("ingredients", tbl => {
      tbl.increments("ingredient_id");

      tbl
        .string("ingredient_name", 128)
        .notNullable()
        .unique();
    })

    .createTable("recipe_instructions", tbl => {
      tbl.increments("instructions_id");
      tbl.string("instructions", 128).notNullable();
      tbl.integer("step_number").notNullable();

      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })

    .createTable("recipe_ingredients", tbl => {
      tbl.primary(["recipe_id", "ingredient_id"]);

      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl.string("UOM", 20).notNullable();

      tbl.float("quantity").notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("recipe_instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};

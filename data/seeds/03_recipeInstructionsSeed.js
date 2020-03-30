exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_instructions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_instructions").insert([
        { recipe_id: 2, step_number: 1, instructions: "pour lemonjuice" },
        {
          recipe_id: 2,
          step_number: 2,
          instructions:
            "pop that badboy on the pan heated to 375 degrees and remove after about 20 seconds, boom"
        }
      ]);
    });
};

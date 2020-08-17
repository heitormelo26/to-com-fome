import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("ingredients_recipe", (table) => {
    table.increments("id").primary();
    table.string("unity").notNullable();
    table.integer("quantity").notNullable();
    table
      .integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("ingredient_id")
      .notNullable()
      .references("id")
      .inTable("ingredients")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("ingredients_recipe");
}

import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("user_recipes", (table) => {
    table.increments("id").primary();
    table.integer("isLiked").notNullable();
    table.integer("isSaved").notNullable();
    table
      .integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("user_recipes");
}

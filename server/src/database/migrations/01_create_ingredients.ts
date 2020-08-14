import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("ingredients", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("category").notNullable();
    table.string("image").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("ingredients");
}

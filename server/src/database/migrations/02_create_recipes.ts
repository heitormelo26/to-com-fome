import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("ingredients", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("categories").notNullable();
    table.string("image").notNullable();
    table.specificType("products", "object ARRAY").notNullable();
    table.specificType("prepare_mode", "text ARRAY").notNullable();
    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.integer("yield").notNullable();
    table.integer("time").notNullable();
    table.integer("likes").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("ingredients");
}

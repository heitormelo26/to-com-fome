import { Request, Response } from "express";

import db from "../database/connection";

interface ProductItem {
  ingredient_id: number;
  unity: string;
  quantity: number;
}

export default class RecipesController {
  async index(request: Request, response: Response) {
    const filters = request.query;
    const categories = filters.categories as string;
    const meals = filters.meals as string;
    const countries = filters.countries as string;
    if (!filters.categories && !filters.meals && !filters.countries) {
      return response.status(400).json({
        error: "Missing filters to search recipes",
      });
    }

    const recipes = await db("recipes")
      .whereExists(function () {
        this.select("id.*")
          .from("recipes")
          .whereRaw("`recipes`.`categories` like %??%", [categories])
          .whereRaw("`recipes`.`categories` like %??%", [meals])
          .whereRaw("`recipes`.`categories` like %??%", [countries]);
      })
      .select(["recipes.*"]);
    return response.json(recipes);
  }

  async create(request: Request, response: Response) {
    const {
      user_id,
      title,
      categories,
      image,
      products,
      description,
      prepare_mode,
      amount,
      time,
      likes,
    } = request.body;
    const trx = await db.transaction();
    try {
      const insertedPrepareMode = (prepare_mode as string).split("\n");
      const insertedRecipesIds = await trx("recipes").insert({
        user_id,
        title,
        categories,
        image,
        description,
        prepare_mode: insertedPrepareMode,
        amount,
        time,
        likes,
      });
      const recipe_id = insertedRecipesIds[0];
      const insertedProducts = products.map((productItem: ProductItem) => {
        return {
          recipe_id,
          ingredient_id: productItem.ingredient_id,
          unity: productItem.unity,
          quantity: productItem.quantity,
        };
      });
      await trx("ingredients_recipe").insert(insertedProducts);
      await trx.commit();
      return response.status(201).send();
    } catch (err) {
      await trx.rollback();
      return response.status(400).json({
        error: "Unexpected error while creating new recipe",
      });
    }
  }

  async delete(request: Request, response: Response) {
    const { id } = request.body;
    const trx = await db.transaction();
    try {
      await trx("recipes").where("id", id).del();
      await trx.commit();
      return response.status(201).send();
    } catch (err) {
      await trx.rollback();
      return response.status(400).json({
        error: "Unexpected error while deleting recipe",
      });
    }
  }

  async update(request: Request, response: Response) {
    const {
      id,
      title,
      categories,
      image,
      products,
      description,
      prepare_mode,
      amount,
      time,
    } = request.body;
    const trx = await db.transaction();
    try {
      const insertedPrepareMode = (prepare_mode as string).split("\n");
      const insertedProducts = await products.map(
        (productItem: ProductItem) => {
          trx("ingredients_recipe").where("recipe_id", "=", id).update({
            unity: productItem.unity,
            quantity: productItem.quantity,
            recipe_id: id,
            ingredient_id: productItem.ingredient_id,
          });
        }
      );
      await trx("recipes").where("id", "=", id).update({
        title,
        categories,
        image,
        description,
        prepare_mode,
        amount,
        time,
      });
      await trx.commit();
      return response.status(201).send();
    } catch (err) {
      await trx.rollback();
      return response.status(400).json({
        error: "Unexpected error while updating recipe",
      });
    }
  }
}

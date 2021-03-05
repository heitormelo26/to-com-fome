import { Request, Response } from "express";

import db from "../database/connection";

export default class UserRecipesController {
  async index(request: Request, response: Response) {}

  async create(request: Request, response: Response) {
    const filters = request.query;
    const isSaved = filters.isSaved as string;
    const isLiked = filters.isLiked as string;
    const recipe_id = filters.recipe_id as string;
    const user_id = filters.user_id as string;

    console.log(request.query);
    console.log(!filters.recipe_id + "/" + !filters.user_id);
    if (!filters.recipe_id && !filters.user_id) {
      return response.status(400).json({
        error: "Missing filters to save/like the recipe",
      });
    }

    const trx = await db.transaction();
    try {
      console.log(user_id);
      await trx("user_recipes").insert({
        user_id,
        recipe_id,
        isLiked,
        isSaved,
      });
      await trx.commit();

      return response.status(201).send();
    } catch (err) {
      console.log("Pr");
      await trx.rollback();
      return response.status(400).json({
        error: "Unexpected error while creating new recipe",
      });
    }
  }

  async getUserRecipe(request: Request, response: Response) {
    const filters = request.query;
    const recipe_id = filters.recipe_id;
    const user_id = filters.user_id;

    if (!filters.recipe_id && !filters.user_id) {
      return response.status(400).json({
        error: "Missing filters to save/like the recipe",
      });
    }
    try {
      const recipes = await db("user_recipes")
        .select("*")
        .where({ user_id: Number(user_id), recipe_id: Number(recipe_id) });
      return response.json(recipes);
    } catch (err) {
      return response.status(400).json({
        error: "Unexpected error while creating new recipe",
      });
    }
  }

  async updateLike(request: Request, response: Response) {
    const filters = request.query;
    const recipe_id = filters.recipe_id;
    const user_id = filters.user_id;

    if (!filters.recipe_id && !filters.user_id) {
      return response.status(400).json({
        error: "Missing filters to save/like the recipe",
      });
    }
    try {
      let isLiked = await db("user_recipes")
        .select("isLiked")
        .where({ user_id: Number(user_id), recipe_id: Number(recipe_id) });
      const recipes = await db("user_recipes")
        .where({
          user_id: Number(user_id),
          recipe_id: Number(recipe_id),
        })
        .update({ isLiked: isLiked[0].isLiked === 0 ? 1 : 0 });

      return response.json(recipes);
    } catch (err) {
      return response.status(400).json({
        error: "Unexpected error while creating new recipe",
      });
    }
  }

  async updateSaved(request: Request, response: Response) {
    const filters = request.query;
    const recipe_id = filters.recipe_id;
    const user_id = filters.user_id;

    if (!filters.recipe_id && !filters.user_id) {
      return response.status(400).json({
        error: "Missing filters to save/like the recipe",
      });
    }
    try {
      let isSaved = await db("user_recipes")
        .select("isSaved")
        .where({ user_id: Number(user_id), recipe_id: Number(recipe_id) });
      const recipes = await db("user_recipes")
        .where({
          user_id: Number(user_id),
          recipe_id: Number(recipe_id),
        })
        .update({ isSaved: isSaved[0].isSaved === 0 ? 1 : 0 });

      return response.json(recipes);
    } catch (err) {
      return response.status(400).json({
        error: "Unexpected error while creating new recipe",
      });
    }
  }

  async delete(request: Request, response: Response) {
    const filters = request.query;
    const id = filters.id as string;
    const trx = await db.transaction();
    try {
      await trx("user_recipes").where("id", id).del();
      await trx.commit();
      return response.status(201).send();
    } catch (err) {
      await trx.rollback();
      return response.status(400).json({
        error: "Unexpected error while deleting recipe",
      });
    }
  }
}

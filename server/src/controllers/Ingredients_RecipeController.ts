import { Request, Response } from "express";

import db from "../database/connection";

interface ProductItem {
  ingredient_id: number;
  unity: string;
  quantity: number;
}

export default class Ingredients_RecipeController {
  async index(request: Request, response: Response) {
    const ingredients_recipe = await db("ingredients_recipe").select("*");
    return response.json(ingredients_recipe);
  }

  async getIngredients(request: Request, response: Response) {
    const filters = request.query;
    const id = filters.id as string;
    if (!filters.id) {
      return response.status(400).json({
        error: "Missing filters to search ingredients",
      });
    } else {
      const recipe = await db("ingredients_recipe")
        .select(
          "ingredients.name",
          "ingredients_recipe.unity",
          "ingredients_recipe.quantity"
        )
        .where("ingredients_recipe.recipe_id", id)
        .innerJoin("recipes", "ingredients_recipe.recipe_id", "recipes.id")
        .innerJoin(
          "ingredients",
          "ingredients_recipe.ingredient_id",
          "ingredients.id"
        );
      return response.json(recipe);
    }
  }
}

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
}

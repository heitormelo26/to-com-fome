import { Request, Response } from "express";

import db from "../database/connection";

interface ProductItem {
  ingredient_id: number;
  unity: string;
  quantity: number;
}

export default class IngredientsController {
  async index(request: Request, response: Response) {
    const filters = request.query;
    const name = filters.name as string;
    const category = filters.category as string;
    if (!filters.category && !filters.name) {
      return response.status(400).json({
        error: "Missing filters to search ingredients",
      });
    }

    const ingredients = await db("ingredients")
      .whereExists(function () {
        this.select("id.*")
          .from("ingredients")
          .whereRaw("`ingredients`.`name` = ??", [name])
          .whereRaw("`ingredients`.`category` = ??", [category]);
      })
      .select(["ingredients.*"]);
    return response.json(ingredients);
  }
}

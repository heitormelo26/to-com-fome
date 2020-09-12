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
    if (filters.name && filters.category) {
      const ingredients = await db("ingredients")
        .where({
          name: name,
          category: category,
        })
        .select("*");
      return response.json(ingredients);
    } else if (!filters.name && !filters.category) {
      const ingredients = await db("ingredients").select("*");
      return response.json(ingredients);
    } else {
      return response.status(400).json({
        error: "Missing filters to search ingredients",
      });
    }
  }

  async create(request: Request, response: Response) {
    const { name, category, image } = request.body;
    const trx = await db.transaction();
    try {
      await trx("ingredients").insert({
        name,
        category,
        image,
      });
      await trx.commit();
      return response.status(201).send();
    } catch (err) {
      await trx.rollback();
      return response.status(400).json({
        error: "Unexpected error while creating new ingredient",
      });
    }
  }
}

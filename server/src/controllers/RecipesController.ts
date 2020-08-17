import { Request, Response } from "express";

import db from "../database/connection";

interface ProductItem {
  ingredient_id: number;
  unity: string;
  quantity: number;
}

export default class RecipesController {
  async index(request: Request, response: Response) {
    return response.status(201).send();
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
}

import { Request, Response } from "express";

import db from "../database/connection";

export default class UserRecipesController { 
    async index(request: Request, response: Response) {
    
    }

    async create(request: Request, response: Response){
        const filters = request.body;
        console.log(filters);
        const isSaved = filters.isSaved;
        const isLiked = filters.isLiked;
        const recipe_id = filters.recipe_id;
        const user_id = filters.user_id;

        if(!filters.recipe_id && !filters.user_id){
          return response.status(400).json({
            error: "Missing filters to save/like the recipe"
          });
        }

        const trx = await db.transaction();
    try {
      await trx("user_recipes").insert({
        user_id,
        recipe_id,
        isLiked,
        isSaved,
      });
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
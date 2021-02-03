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
    const input = filters.input as string;
    const qtd = filters.qtd;
    if (
      !filters.categories &&
      !filters.meals &&
      !filters.countries &&
      !filters.input
    ) {
      
      if (filters.qtd) {
        const recipes = await db("recipes").select().limit(Number(qtd));
        return response.json(recipes);
      } else {
        const recipes = await db("recipes").select();
        return response.json(recipes);
      }
    }
    if (
      filters.categories &&
      !filters.meals &&
      !filters.countries &&
      !filters.input
    ) {
      // CATEGORIES
      
      if (filters.qtd) {
        const recipes = await db("recipes")
          .select("*")
          .from("recipes")
          .where("categories", "like", `%${[categories]}%`)
          .limit(Number(qtd));
        return response.json(recipes);
      } else {
        const recipes = await db("recipes")
          .select("*")
          .from("recipes")
          .where("categories", "like", `%${[categories]}%`);
        return response.json(recipes);
      }
    } else if (
      !filters.categories &&
      filters.meals &&
      !filters.countries &&
      !filters.input
    ) {
      // MEALS
      
      if (filters.qtd) {
        const recipes = await db("recipes")
          .select("*")
          .from("recipes")
          .where("categories", "like", `%${[meals]}%`)
          .limit(Number(qtd));
        return response.json(recipes);
      } else {
        const recipes = await db("recipes")
          .select("*")
          .from("recipes")
          .where("categories", "like", `%${[meals]}%`);
        return response.json(recipes);
      }
    } else if (
      !filters.categories &&
      !filters.meals &&
      filters.countries &&
      !filters.input
    ) {
      // COUNTRIES
      
      if (filters.qtd) {
        const recipes = await db("recipes")
          .select("*")
          .from("recipes")
          .where("categories", "like", `%${[countries]}%`)
          .limit(Number(qtd));
        return response.json(recipes);
      } else {
        const recipes = await db("recipes")
          .select("*")
          .from("recipes")
          .where("categories", "like", `%${[countries]}%`);
        return response.json(recipes);
      }
    } else if (
      !filters.categories &&
      !filters.meals &&
      !filters.countries &&
      filters.input
    ) {
      // INPUT
      
      if (filters.qtd) {
        const recipes = await db("recipes")
          .select("*")
          .where("title", "like", `%${input}%`)
          .limit(Number(qtd));
        return response.json(recipes);
      } else {
        const recipes = await db("recipes")
          .select("*")
          .where("title", "like", `%${input}%`);
        return response.json(recipes);
      }
    } else if (
      filters.categories &&
      filters.meals &&
      !filters.countries &&
      !filters.input
    ) {
      // CATEGORIES & MEALS
     
      if (filters.qtd) {
        const recipes = await db("recipes")
          .select("*")
          .from("recipes")
          .where("categories", "like", `%${[meals]}%`)
          .where("categories", "like", `%${[categories]}%`)
          .limit(Number(qtd));
        return response.json(recipes);
      } else {
        const recipes = await db("recipes")
          .select("*")
          .from("recipes")
          .where("categories", "like", `%${[meals]}%`)
          .where("categories", "like", `%${[categories]}%`);
        return response.json(recipes);
      }
    } else if (filters.categories && !filters.meals && filters.countries) {
      // CATEGORIES & COUNTRIES
      
      if (filters.qtd) {
        const recipes = await db("recipes")
          .select("*")
          .from("recipes")
          .where("categories", "like", `%${[countries]}%`)
          .where("categories", "like", `%${[categories]}%`)
          .limit(Number(qtd));
        return response.json(recipes);
      } else {
        const recipes = await db("recipes")
          .select("*")
          .from("recipes")
          .where("categories", "like", `%${[countries]}%`)
          .where("categories", "like", `%${[categories]}%`);
        return response.json(recipes);
      }
    } else if (!filters.categories && filters.meals && filters.countries) {
      // MEALS & COUNTRIES
      
      if (filters.qtd) {
        const recipes = await db("recipes")
          .select("*")
          .from("recipes")
          .where("categories", "like", `%${[meals]}%`)
          .where("categories", "like", `%${[countries]}%`)
          .limit(Number(qtd));
        return response.json(recipes);
      } else {
        const recipes = await db("recipes")
          .select("*")
          .from("recipes")
          .where("categories", "like", `%${[meals]}%`)
          .where("categories", "like", `%${[countries]}%`);
        return response.json(recipes);
      }
    } else if (
      filters.categories &&
      filters.meals &&
      !filters.countries &&
      filters.input
    ) {
      // CATEGORIES & MEALS & INPUT
      
      if (filters.qtd) {
        const recipes = await db("recipes")
          .select("*")
          .from("recipes")
          .where("categories", "like", `%${[meals]}%`)
          .where("categories", "like", `%${[categories]}%`)
          .where("title", "like", `%${[input]}%`)
          .limit(Number(qtd));
        return response.json(recipes);
      } else {
        const recipes = await db("recipes")
          .select("*")
          .from("recipes")
          .where("categories", "like", `%${[meals]}%`)
          .where("categories", "like", `%${[categories]}%`)
          .where("title", "like", `%${[input]}%`);
        return response.json(recipes);
      }
    } else if (
      filters.categories &&
      !filters.meals &&
      filters.countries &&
      filters.input
    ) {
      // CATEGORIES & COUNTRIES & INPUT
     
      if (filters.qtd) {
        const recipes = await db("recipes")
          .select("*")
          .from("recipes")
          .where("categories", "like", `%${[countries]}%`)
          .where("categories", "like", `%${[categories]}%`)
          .where("title", "like", `%${[input]}%`)
          .limit(Number(qtd));
        return response.json(recipes);
      } else {
        const recipes = await db("recipes")
          .select("*")
          .from("recipes")
          .where("categories", "like", `%${[countries]}%`)
          .where("categories", "like", `%${[categories]}%`)
          .where("title", "like", `%${[input]}%`);
        return response.json(recipes);
      }
    } else if (
      !filters.categories &&
      filters.meals &&
      filters.countries &&
      filters.input
    ) {
      // MEALS & COUNTRIES & INPUT
      
      if (filters.qtd) {
        const recipes = await db("recipes")
          .select("*")
          .from("recipes")
          .where("categories", "like", `%${[meals]}%`)
          .where("categories", "like", `%${[countries]}%`)
          .where("title", "like", `%${[input]}%`)
          .limit(Number(qtd));
        return response.json(recipes);
      } else {
        const recipes = await db("recipes")
          .select("*")
          .from("recipes")
          .where("categories", "like", `%${[meals]}%`)
          .where("categories", "like", `%${[countries]}%`)
          .where("title", "like", `%${[input]}%`);
        return response.json(recipes);
      }
    } else if (
      filters.categories &&
      filters.meals &&
      filters.countries &&
      !filters.input
    ) {
      // CATEGORIES, MEALS & COUNTRIES
      
      if (filters.qtd) {
        const recipes = await db("recipes")
          .select("*")
          .from("recipes")
          .where("categories", "like", `%${[meals]}%`)
          .where("categories", "like", `%${[categories]}%`)
          .where("categories", "like", `%${[countries]}%`)
          .limit(Number(qtd));
        return response.json(recipes);
      } else {
        const recipes = await db("recipes")
          .select("*")
          .from("recipes")
          .where("categories", "like", `%${[meals]}%`)
          .where("categories", "like", `%${[categories]}%`)
          .where("categories", "like", `%${[countries]}%`);
        return response.json(recipes);
      }
    } else {
      // CATEGORIES, MEALS & COUNTRIES && INPUT
    
      if (filters.qtd) {
        const recipes = await db("recipes")
          .select("id.*")
          .from("recipes")
          .where("categories", "like", `%${[meals]}%`)
          .where("categories", "like", `%${[categories]}%`)
          .where("categories", "like", `%${[countries]}%`)
          .where("title", "like", `%${input}%`)
          .limit(Number(qtd));
        return response.json(recipes);
      } else {
        const recipes = await db("recipes")
          .select("id.*")
          .from("recipes")
          .where("categories", "like", `%${[meals]}%`)
          .where("categories", "like", `%${[categories]}%`)
          .where("categories", "like", `%${[countries]}%`)
          .where("title", "like", `%${input}%`);
        return response.json(recipes);
      }
    }
  }

  async getById(request: Request, response: Response) {
    const filters = request.query;
    const id = filters.id as string;
    if (!filters.id) {
      return response.status(400).json({
        error: "Missing filters to search recipes",
      });
    } else {
      const recipes = await db("recipes")
        .select("*")
        .from("recipes")
        .where("id", "=", id)
        .limit(1);
      return response.json(recipes);
    }
  }

  async searchByInput(request: Request, response: Response) {
    const filters = request.query;
    const input = filters.input as string;
    if (!filters.input) {
      return response.status(400).json({
        error: "Missing filters to search recipes",
      });
    }
    const recipes = await db("recipes")
      .select("*")
      .where("title", "like", `%${input}%`);
    return response.json(recipes);
  }

  async searchByCountry(request: Request, response: Response) {
    const filters = request.query;
    const countries = filters.countries as string;
    if (!filters.countries) {
      return response.status(400).json({
        error: "Missing filters to search recipes",
      });
    }
    const recipes = await db("recipes")
      .whereExists(function () {
        this.select("id.*")
          .from("recipes")
          .whereRaw("`recipes`.`categories` like %??%", [countries]);
      })
      .select(["recipes.*"]);
    return response.json(recipes);
  }

  async searchByMeal(request: Request, response: Response) {
    const filters = request.query;
    const meals = filters.meals as string;
    if (!filters.meals) {
      const recipes = await db("recipes")
      .select("*")
      .limit(12);
      return response.json(recipes);
    }else{
      const recipes = await db("recipes")
      .where("categories", "like", `%${meals}%`)
      .select("*")
      .limit(12);
      return response.json(recipes);
    }   
  }

  async searchByIngredients(request: Request, response: Response) {
    const filters = request.query;
    const ingredients = filters.ingredients as Array<string>;
    if (!filters.ingredients) {
      return response.status(400).json({
        error: "Missing filters to search recipes",
      });
    }
    const amount = ingredients.length;

    const recipes = await db("recipes") // fazer taxa de compatibilidade
      .whereExists(function () {
        for (let i = 0; i < amount; i++) {
          this.select("id.*")
            .from("ingredients_recipes")
            .whereRaw("`ingredient`.`id` = ??", [Number(ingredients[i])]);
        }
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
      for (var i = 0; i < insertedProducts.length; i++) {
        await trx("ingredients_recipe").insert(insertedProducts[i]);
      }
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

  async searchSavedRecipes(request: Request, response: Response) {
    const filters = request.query;
    const user_id = filters.id;
    const qtd = filters.qtd;
    const recipes = await db("user_recipes") // fazer taxa de compatibilidade
      .whereExists(function () {
        this.select("recipe_id.*")
          .from("user_recipes")
          .whereRaw("`user_id` = ??", [Number(user_id)])
          .whereRaw("`type` = ??", "saved");
      })
      .select(["recipes.*"])
      .limit(Number(qtd));
    return response.json(recipes);
  }

  async searchPrivateRecipes(request: Request, response: Response) {
    const filters = request.query;
    const user_id = filters.id;
    const qtd = filters.qtd;
    const recipes = await db("user_recipes") // fazer taxa de compatibilidade
      .whereExists(function () {
        this.select("recipe_id.*")
          .from("user_recipes")
          .whereRaw("`user_id` = ??", [Number(user_id)])
          .whereRaw("`type` = ??", "private");
      })
      .select(["recipes.*"])
      .limit(Number(qtd));
    return response.json(recipes);
  }

  async searchSendRecipes(request: Request, response: Response) {
    const filters = request.query;
    const user_id = filters.id;
    const qtd = filters.qtd;
    const recipes = await db("user_recipes") // fazer taxa de compatibilidade
      .whereExists(function () {
        this.select("recipe_id.*")
          .from("user_recipes")
          .whereRaw("`user_id` = ??", [Number(user_id)])
          .whereRaw("`type` = ??", "send");
      })
      .select(["recipes.*"])
      .limit(Number(qtd));
    return response.json(recipes);
  }

  async countSavedRecipes(request: Request, response: Response) {
    const filters = request.query;
    const user_id = filters.id;
    const recipes = await db("user_recipes") // fazer taxa de compatibilidade
      .whereExists(function () {
        this.select("recipe_id.*")
          .from("user_recipes")
          .whereRaw("`user_id` = ??", [Number(user_id)])
          .whereRaw("`type` = ??", "saved");
      })
      .select(["recipes.*"])
      .count();
    return response.json(recipes);
  }

  async countSendRecipes(request: Request, response: Response) {
    const filters = request.query;
    const user_id = filters.id;
    const recipes = await db("user_recipes") // fazer taxa de compatibilidade
      .whereExists(function () {
        this.select("recipe_id.*")
          .from("user_recipes")
          .whereRaw("`user_id` = ??", [Number(user_id)])
          .whereRaw("`type` = ??", "send");
      })
      .select(["recipes.*"])
      .count();
    return response.json(recipes);
  }
}

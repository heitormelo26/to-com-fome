import { Request, Response } from "express";

import db from "../database/connection";

interface ProductItem {
  ingredient_id: number;
  unity: string;
  quantity: number;
}

interface Field {
  campo: string;
  valor: string;
}

export default class RecipesController {
  async index(request: Request, response: Response) {
    const filters = request.query;
    const categories = filters.categories as string;
    const meals = filters.meals as string;
    const countries = filters.countries as string;
    const input = filters.input as string;
    let filtersArray: Field[] = [];

    if (categories) {
      filtersArray.push({ campo: "categories", valor: categories });
    }
    if (meals) {
      filtersArray.push({ campo: "categories", valor: meals });
    }
    if (countries) {
      filtersArray.push({ campo: "categories", valor: countries });
    }
    if (input) {
      filtersArray.push({ campo: "title", valor: input });
    }

    if (filtersArray.length === 1) {
      const recipes = await db("recipes")
        .select("*")
        .from("recipes")
        .where(filtersArray[0].campo, "like", `%${[filtersArray[0].valor]}%`);
      return response.json(recipes);
    }

    if (filtersArray.length === 2) {
      const recipes = await db("recipes")
        .select("*")
        .from("recipes")
        .where(filtersArray[0].campo, "like", `%${[filtersArray[0].valor]}%`)
        .where(filtersArray[1].campo, "like", `%${[filtersArray[1].valor]}%`);
      return response.json(recipes);
    }

    if (filtersArray.length === 3) {
      const recipes = await db("recipes")
        .select("*")
        .from("recipes")
        .where(filtersArray[0].campo, "like", `%${[filtersArray[0].valor]}%`)
        .where(filtersArray[1].campo, "like", `%${[filtersArray[1].valor]}%`)
        .where(filtersArray[2].campo, "like", `%${[filtersArray[2].valor]}%`);
      return response.json(recipes);
    }

    if (filtersArray.length === 4) {
      const recipes = await db("recipes")
        .select("*")
        .from("recipes")
        .where(filtersArray[0].campo, "like", `%${[filtersArray[0].valor]}%`)
        .where(filtersArray[1].campo, "like", `%${[filtersArray[1].valor]}%`)
        .where(filtersArray[2].campo, "like", `%${[filtersArray[2].valor]}%`)
        .where(filtersArray[3].campo, "like", `%${[filtersArray[3].valor]}%`);
      return response.json(recipes);
    }

    const recipes = await db("recipes").select("*").from("recipes");
    return response.json(recipes);
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
      const recipes = await db("recipes").select("*").limit(12);
      return response.json(recipes);
    } else {
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
    const filters = request.query;
    const id = filters.id as string;
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

  async getUserRecipes(request: Request, response: Response) {
    const filters = request.query;
    const user_id = filters.user_id as String;

    if (!filters.user_id) {
      return response.status(400).json({
        error: "Missing filters to search recipes",
      });
    }

    const recipes = await db("recipes") // fazer taxa de compatibilidade
      .select("*")
      .where("user_id", Number(user_id));
    return response.json(recipes);
  }
}

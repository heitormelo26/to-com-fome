import express from "express";
import RecipesController from "./controllers/RecipesController";
import IngredientsController from "./controllers/IngredientsController";
import UsersController from "./controllers/UsersController";
import Ingredients_RecipeController from "./controllers/Ingredients_RecipeController";

const routes = express.Router();

const recipesControllers = new RecipesController();
const ingredientsController = new IngredientsController();
const usersControllers = new UsersController();
const ingredientsRecipeController = new Ingredients_RecipeController();

routes.post("/r", recipesControllers.create);
routes.get("/r", recipesControllers.searchByMeal);

routes.post("/i", ingredientsController.create);
routes.get("/i", ingredientsController.index);

routes.post("/u", usersControllers.create);
routes.post("/changePassword", usersControllers.changePassword);
routes.get("/u", usersControllers.index);

routes.get("/ir", ingredientsRecipeController.index);

export default routes;

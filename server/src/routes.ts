import express from "express";
import RecipesController from "./controllers/RecipesController";
import IngredientsController from "./controllers/IngredientsController";

const routes = express.Router();

const recipesControllers = new RecipesController();
const ingredientsController = new IngredientsController();

routes.post("/r", recipesControllers.create);
routes.get("/r", recipesControllers.searchByMeal);

routes.post("/i", ingredientsController.create);
routes.get("/i", ingredientsController.index);

export default routes;

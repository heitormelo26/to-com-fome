import express from "express";
import RecipesController from "./controllers/RecipesController";
import IngredientsController from "./controllers/IngredientsController";
import UsersController from "./controllers/UsersController";
import Ingredients_RecipeController from "./controllers/Ingredients_RecipeController";
import UserRecipesController from "./controllers/User_RecipesController";

const routes = express.Router();

const recipesControllers = new RecipesController();
const ingredientsController = new IngredientsController();
const usersControllers = new UsersController();
const ingredientsRecipeController = new Ingredients_RecipeController();
const user_RecipesController = new UserRecipesController();

routes.post("/r", recipesControllers.create);
routes.get("/r", recipesControllers.index);
routes.get("/r-i", recipesControllers.searchByInput);
routes.get("/r-m", recipesControllers.searchByMeal);
routes.get("/receita", recipesControllers.getById);
routes.get("/r-u", recipesControllers.getUserRecipes);
routes.delete("/r", recipesControllers.delete);

routes.post("/i", ingredientsController.create);
routes.get("/i", ingredientsController.index);
routes.get("/i-c", ingredientsController.searchByCategory);
routes.get("/i-n", ingredientsController.searchByName);

routes.post("/u", usersControllers.create);
routes.post("/u-c", usersControllers.changePassword);
routes.get("/u", usersControllers.index);
routes.get("/u-i", usersControllers.getUserById);
routes.get("/u-e", usersControllers.getUserByEmail);
routes.get("/l", usersControllers.login);

routes.get("/ir", ingredientsRecipeController.index);
routes.get("/ir-i", ingredientsRecipeController.getIngredients);

routes.post("/ur", user_RecipesController.create);
routes.get("/ur", user_RecipesController.getUserRecipe);
routes.put("/ur-l", user_RecipesController.updateLike);
routes.put("/ur-s", user_RecipesController.updateSaved);
routes.delete("/ur-d", user_RecipesController.delete);

export default routes;

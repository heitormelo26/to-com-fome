import express from "express";
import RecipesController from "./controllers/ClassesController";
//import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();

const recipesControllers = new RecipesController();
//const connectionsController = new ConnectionsController();

routes.post("/recipes", recipesControllers.create);
//routes.get("/classes", classesControllers.index);

//routes.post("/connections", connectionsController.create);
//routes.get("/connections", connectionsController.index);

export default routes;

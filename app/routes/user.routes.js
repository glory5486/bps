const routes = require("express").Router();
const controller = require("../controllers/user.controller");
const authorize = require("../middlewares/authorize");

routes.get("/", authorize, controller.getall);
routes.post("/", authorize, controller.create);
routes.post("/login", controller.login);
routes.put("/:id", authorize, controller.update);
routes.delete("/:id", authorize, controller.delete);

module.exports = routes;
const routes = require("express").Router();
const controller = require("../../controllers/sub_kategori.controller");

routes.get("/", controller.getall);
routes.post("/", controller.create);
routes.put("/:id", controller.update);
routes.delete("/:id", controller.delete);

module.exports = routes;
const express = require("express");
const route = express.Router();
const courseController = require('../app/controllers/CourseController');

route.get("/create", courseController.create);
route.get("/api", courseController.showAPI);
route.post("/store", courseController.store);
route.get("/:slug", courseController.show);
route.get("/:id/edit", courseController.edit);
route.put("/:id", courseController.update);
route.patch("/:id", courseController.restore);
route.delete("/:id", courseController.destroy);
route.delete("/:id/force", courseController.truncate);

module.exports = route;

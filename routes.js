const express = require("express");
const routes = express.Router();

const QuizController = require("./api/controller/quiz.controller");

routes.post("/api/v1/quiz", QuizController.create);
routes.get("/api/v1/quiz", QuizController.find);
routes.get("/api/v1/quiz/:id", QuizController.findById);
routes.put("/api/v1/quiz", QuizController.update);
routes.delete("/api/v1/quiz/:id", QuizController.delete);
module.exports = routes;

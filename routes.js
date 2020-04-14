const express = require("express");
const routes = express.Router();

const QuizController = require("./api/controller/quiz.controller");
const QuestionController = require("./api/controller/question.controller");
routes.post("/api/v1/quiz", QuizController.create);
routes.get("/api/v1/quiz", QuizController.find);
routes.get("/api/v1/quiz/:id", QuizController.findById);
routes.put("/api/v1/quiz", QuizController.update);
routes.delete("/api/v1/quiz/:id", QuizController.delete);
routes.get("", QuizController.hello);

routes.post("/api/v1/question", QuestionController.create);
routes.get("/api/v1/question", QuestionController.find);
routes.get("/api/v1/question/:id", QuestionController.findById);
routes.put("/api/v1/question", QuestionController.update);
routes.delete("/api/v1/question/:id", QuestionController.delete);

module.exports = routes;

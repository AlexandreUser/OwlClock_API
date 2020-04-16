const { quizService } = require("../service/quiz.service");
const path = require("path");

module.exports = {
  async hello(req, res) {
    res.sendFile(path.resolve("./template/policarpo/ca/index.html"));
  },
  async find(req, res) {
    let result = await quizService.find();
    res.send(result);
  },
  async findById(req, res) {
    let id = req.params.id;
    let result = await quizService.findById(id);
    res.send(result);
  },
  async create(req, res) {
    let result = await quizService.create(req.body);
    res.send(result);
  },
  async update(req, res) {
    let id = req.body._id;
    let result = await quizService.update(req.body, id);
    res.send(result);
  },
  async delete(req, res) {
    let id = req.params.id;
    let result = await quizService.delete(id);
    res.send(result);
  },
};

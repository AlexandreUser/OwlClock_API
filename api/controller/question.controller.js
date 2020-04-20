const { questionService } = require("../service/quiz.service");
module.exports = {
  async find(req, res) {
    let result = await questionService.find();
    res.send(result);
  },
  async findById(req, res) {
    let id = req.params.id;
    let result = await questionService.findById(id);
    res.send(result);
  },
  async findByQuizId(req, res) {
    let id = req.params.id;
    let result = await questionService.findByQuiz(id);
    res.send(result);
  },
  async create(req, res) {
    let result = await questionService.create(req.body);
    res.send(result);
  },
  async update(req, res) {
    let id = req.body._id;
    let result = await questionService.update(req.body, id);
    res.send(result);
  },
  async delete(req, res) {
    let id = req.params.id;
    let result = await questionService.delete(id);
    res.send(result);
  },
};

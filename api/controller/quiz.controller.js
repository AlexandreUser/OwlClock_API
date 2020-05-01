const { quizService } = require("../service/quiz.service");
const path = require("path");

module.exports = {
  async cert_with_www(req, res) {
    res.sendFile(
      path.resolve(
        "./template/policarpo/ca/cert/1W6I1kZylliqlB3KmvLvgs4h9CNSwmf5hXflPDKYIoY"
      )
    );
  },
  async cert_without_www(req, res) {
    res.sendFile(
      path.resolve(
        "./template/policarpo/ca/cert/-IdEkdK1gk5i9qUhFhwz17DDejLMH3NQasv_2oaCvB0"
      )
    );
  },
  async hello(req, res) {
    res.sendFile(path.resolve("./template/policarpo/ca/index.html"));
  },
  async find(req, res) {
    let result = await quizService.find({});
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

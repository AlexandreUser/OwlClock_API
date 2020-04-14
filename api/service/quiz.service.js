const { quiz } = require("../model/quiz.model");
exports.quizService = {
  async findById(id) {
    return await quiz.findOne({ _id: id });
  },
  async find() {
    return await quiz.find({ active: true });
  },
  async create(newWiki) {
    return await quiz.create(newWiki);
  },
  async update(updateWiki, id) {
    return await quiz.update({ _id: id }, updateWiki);
  },
  async delete(id) {
    return await quiz.update({ _id: id }, { active: false });
  },
};

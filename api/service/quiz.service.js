const { quiz, question } = require("../model/quiz.model");
exports.quizService = {
  async findById(id) {
    return await quiz.findOne({ _id: id });
  },
  async find() {
    return await quiz.find({ active: true });
  },
  async create(newQuiz) {
    return await quiz.create(newQuiz);
  },
  async update(updateQuiz, id) {
    return await quiz.update({ _id: id }, updateQuiz);
  },
  async delete(id) {
    return await quiz.update({ _id: id }, { active: false });
  },
};
exports.questionService = {
  async findById(id) {
    return await question.findOne({ _id: id });
  },
  async find() {
    return await question.find({ active: true });
  },
  async create(newQuestion) {
    return await question.create(newQuestion);
  },
  async update(updateQuestion, id) {
    return await question.update({ _id: id }, updateQuestion);
  },
  async findByQuiz(quizId) {
    return await question.find({ quizId: quizId });
  },
  async delete(id) {
    return await question.update({ _id: id }, { active: false });
  },
};

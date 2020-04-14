const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/OwlClock", {
  useNewUrlParser: true,
});
let Schema = mongoose.Schema;

let questionSchema = new Schema({
  quizId: String,
  question: String,
  responses: [String],
  valid: Number,
});
let quizSchema = new Schema({
  id: String,
  title: String,
  description: String,
  author: String,
});
exports.quiz = mongoose.model("quiz", quizSchema);
exports.question = mongoose.model("question", questionSchema);

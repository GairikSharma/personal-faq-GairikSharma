const mongoose = require("mongoose");

const QuestionAnswers = new mongoose.Schema({
  "question": {
    type: String,
    required: [true, "Question must be provided"]
  },
  "answer": {
    type: String,
    required: [true, "Answer must be provided"]
  }
}, {_id: false});


const personalfaqSchema = new mongoose.Schema({
  "name": {
    type: String,
    required: [true, "Name should be provided"]
  },
  "designation": {
    type: String,
    required: [true, "Designation should be provided"]
  },
  "linkedin": {
    type: String,
    required: [true, "LinkedIn should be provided"]
  },
  "github": {
    type: String,
    required: [true, "GitHub should be provided"]
  },
  "QA": {
    type: [QuestionAnswers],
    required: [true, "QA should be provided"]
  }
});

module.exports = mongoose.model("Personalfaq", personalfaqSchema);

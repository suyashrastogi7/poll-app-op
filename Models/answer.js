const mongoose = require("mongoose");

const answerModel = mongoose.Schema({
  option: String,
  value: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("answer", answerModel);

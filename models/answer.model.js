var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let answerSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  questions: [{ type: Schema.Types.ObjectId, ref: "Question", required: true }],
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Answer", answerSchema);

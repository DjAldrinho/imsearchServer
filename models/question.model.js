var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let questionSchema = new Schema({
  title: String,
  answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Question", questionSchema);

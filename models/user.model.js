var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let userSchema = new Schema({
  name: {
    first: {
      type: String,
      required: true
    },
    last: {
      type: String,
      required: true
    }
  },
  nit: {
    type: String,
    unique: true
  },
  credentials: {
    email: {
      type: String,
      unique: true
    },
    password: String
  }
});

userSchema.virtual("fullName").get(function() {
  return this.name.first + " " + this.name.last;
});

module.exports = mongoose.model("User", userSchema);

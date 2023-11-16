// creation d'un modéle avec mongoose
const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  message: { type: String },
  age: { type: Number },
});

module.exports = mongoose.model("User", postSchema);

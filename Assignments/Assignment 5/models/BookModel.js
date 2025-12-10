const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  genre: { type: String, required: true },
  publishedYear: { type: Number, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true }
});

module.exports = mongoose.model("Book", BookSchema);

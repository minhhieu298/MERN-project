const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SizeSchema = new Schema({
  size: {
    type: String,
  },
});

const ColorSchema = new Schema({
  color: {
    type: String,
  },
});

module.exports = {
  Sizes: mongoose.model("Sizes", SizeSchema),
  Colors: mongoose.model("Colors", ColorSchema),
};

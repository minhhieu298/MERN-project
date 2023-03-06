const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
      // unique: true,
    },
    slug: {
      type: String,
    },
    parent_id: {
      type: String,
    },
  },
  {
    collection: "categories",
  }
);

module.exports = mongoose.model("Category", categorySchema);

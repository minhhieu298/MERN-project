const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    slug: {
      type: String,
      slug: "name",
      unique: true,
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

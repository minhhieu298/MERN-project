const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const productSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      required: true,
    },
    slug: {
      type: String,
      slug: "name",
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    thumbnails: Array,
    colors: [
      {
        color: {
          type: String,
        },
        sold: {
          type: Boolean,
          default: false,
        },
      },
    ],
    sizes: [
      {
        size: {
          type: String,
        },
        sold: {
          type: Boolean,
          default: false,
        },
      },
    ],
    discount: {
      type: Number,
    },
    price_after_discount: {
      type: Number,
    },
    sold: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      required: true,
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    category_parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    gender: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    collection: "products",
    timestamps: true,
  }
);

productSchema.index({ name: "text" });
module.exports = mongoose.model("Products", productSchema);

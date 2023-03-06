const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cartSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  cartItems: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
      required: true
    },
    // name: {
    //   type: String,
    //   required: true,
    // },
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      default: 1,
      required: true
    },
    // image: {
    //   type: String,
    //   required: true,
    // },
    size: {
      type: String
    },
    color: {
      type: String
    }
  }]
}, {
  collection: "carts",
  timestamps: true
});
module.exports = mongoose.model("Cart", cartSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    addressId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    orderItems: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Products",
        },
        payablePrice: {
          type: Number,
          required: true,
        },
        size: {
          type: String,
        },
        color: {
          type: String,
        },
        purchaseQty: {
          type: Number,
          required: true,
        },
      },
    ],
    paymentStatus: {
      status: {
        type: String,
        enum: ["pending", "completed", "cancel", "refund"],
        required: true,
        default: "pending",
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      date: {
        type: Date,
      },
    },
    orderStatus: [
      {
        type: {
          type: String,
          enum: ["ordered", "packed", "shipped", "delivered"],
          default: "ordered",
        },
        date: {
          type: Date,
        },
        isCompleted: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  {
    collection: "orders",
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);

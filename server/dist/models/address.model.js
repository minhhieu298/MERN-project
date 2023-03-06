const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const addressSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  isSelected: {
    type: Boolean,
    default: false
  },
  is_delivery: Boolean
}, {
  collection: "addresses"
});
module.exports = mongoose.model("Address", addressSchema);
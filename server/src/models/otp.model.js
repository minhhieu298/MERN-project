const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const otpSchema = new Schema({
  email: String,
  otp: String,
  username: String,
  firstName: String,
  lastName: String,
  password: String,
  time: {
    type: Date,
    default: Date.now,
    expires: 60,
  },
});

module.exports = mongoose.model("Otp", otpSchema);

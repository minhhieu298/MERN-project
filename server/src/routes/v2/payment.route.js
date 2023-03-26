const { paymentCtrl } = require("../../controllers/payment.controller");
const express = require("express");
const route = express.Router();
const { auth } = require("../../middleware/auth");

route.post(
  "/create-checkout-session",
  auth.authUser,
  paymentCtrl.createCheckout
);

module.exports = route;

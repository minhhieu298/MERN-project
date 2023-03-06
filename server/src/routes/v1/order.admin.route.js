const express = require("express");
const { orderCtrl } = require("../../controllers/order.controller");
const route = express.Router();
const { auth } = require("../../middleware/auth");

route.post(
  "/list-orders",
  auth.authUser,
  auth.authAdmin,
  orderCtrl.getOrdersAdmin
);
route.post(
  "/update-order",
  auth.authUser,
  auth.authAdmin,
  orderCtrl.updateOrder
);

route.post(
  "/single-order-admin",
  auth.authUser,
  auth.authAdmin,
  orderCtrl.getSingleOrderAdmin
);

module.exports = route;

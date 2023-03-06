const express = require("express");
const {
  orderCtrl
} = require("../../controllers/order.controller");
const route = express.Router();
const {
  auth
} = require("../../middleware/auth");
route.post("/create-new-order", auth.authUser, orderCtrl.createOrder);
route.get("/get-user-order", auth.authUser, orderCtrl.getOrdersUser);
route.post("/order/:id", auth.authUser, orderCtrl.getOrderDetail);
route.post("/list-orders", auth.authUser, auth.authAdmin, orderCtrl.getOrdersAdmin);
route.post("/update-order", auth.authUser, auth.authAdmin, orderCtrl.updateOrder);
route.post("/single-order", auth.authUser, orderCtrl.getSingleOrder);
route.post("/single-order-admin", auth.authUser, auth.authAdmin, orderCtrl.getSingleOrderAdmin);
route.post("/update-status-order", auth.authUser, orderCtrl.updateStatusPaymentOrder);
module.exports = route;
const express = require("express");
const { cartCrtl } = require("../../controllers/cart.controller");
const route = express.Router();
const { auth } = require("../../middleware/auth");

route.post("/add-to-cart", auth.authUser, cartCrtl.addToCart);
route.get("/get-user-cart", auth.authUser, cartCrtl.getAllCart);
route.post("/delete-cart", auth.authUser, cartCrtl.deleteCart);

module.exports = route;

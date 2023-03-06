const express = require("express");
const {
  productCtrl
} = require("../../controllers/product.controller");
const route = express.Router();
route.get("/list-product", productCtrl.getProducts);
route.get("/product/:id", productCtrl.getSingleProduct);
module.exports = route;
const express = require("express");
const { productCtrl } = require("../../controllers/product.controller");
const { auth } = require("../../middleware/auth");
const route = express.Router();

route.post(
  "/create-new-product",
  auth.authUser,
  auth.authAdmin,
  productCtrl.createProduct
);
route.post(
  "/update-product/:id",
  auth.authUser,
  auth.authAdmin,
  productCtrl.updateProduct
);
route.delete(
  "/delete-product/:id",
  auth.authUser,
  auth.authAdmin,
  productCtrl.deleteProduct
);

route.post(
  "/create-discount/:id",
  auth.authUser,
  auth.authAdmin,
  productCtrl.getDiscount
);
module.exports = route;

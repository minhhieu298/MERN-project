const express = require("express");
const { accessCtrl } = require("../../controllers/accessories.controller");
const { auth } = require("../../middleware/auth");
const route = express.Router();

route.post(
  "/create-new-accessory",
  // auth.authUser,
  // auth.authAdmin,
  accessCtrl.createAccessories
);

route.get(
  "/get-list-accessory",
  // auth.authUser,
  // auth.authAdmin,
  accessCtrl.getAccessories
);

route.post("/update-accessory", accessCtrl.updateAccessories);
route.post("/delete-accessory", accessCtrl.deleteAccessories);
module.exports = route;

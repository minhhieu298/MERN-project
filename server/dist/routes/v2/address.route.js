const express = require("express");
const {
  addressCtrl
} = require("../../controllers/address.controller");
const route = express.Router();
const {
  auth
} = require("../../middleware/auth");
route.post("/create-new-address", auth.authUser, addressCtrl.createAdr);
route.get("/get-user-address", auth.authUser, addressCtrl.getAdr);
route.post("/update-user-address", auth.authUser, addressCtrl.updateAdr);
route.post("/delete-user-address", auth.authUser, addressCtrl.deleteAdr);
route.post("/set-default-address", auth.authUser, addressCtrl.setDefaultAdr);
route.post("/set-delivery-address", auth.authUser, addressCtrl.getDeliveryAdr);
module.exports = route;
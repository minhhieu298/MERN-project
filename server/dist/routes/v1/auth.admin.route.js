const express = require("express");
const {
  userCtrl
} = require("../../controllers/user.controller");
const {
  auth
} = require("../../middleware/auth");
const route = express.Router();
route.post("/list-user", auth.authUser, auth.authAdmin, userCtrl.getListUser);
module.exports = route;
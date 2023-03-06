const express = require("express");
const {
  cateCtrl
} = require("../../controllers/category.controller");
const {
  auth
} = require("../../middleware/auth");
const route = express.Router();
route.post("/create-new-category", cateCtrl.createCate);
route.post("/update-cate", auth.authUser, auth.authAdmin, cateCtrl.updateCate);
route.post("/delete-cate", auth.authUser, auth.authAdmin, cateCtrl.deleteCate);
module.exports = route;
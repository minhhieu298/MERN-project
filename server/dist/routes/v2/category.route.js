const express = require("express");
const {
  cateCtrl
} = require("../../controllers/category.controller");
const route = express.Router();
route.get("/list-categories", cateCtrl.getAllCates);
module.exports = route;
const express = require("express");
const { cateCtrl } = require("../../controllers/category.controller");
const { auth } = require("../../middleware/auth");
const route = express.Router();

route.post("/create-new-category", cateCtrl.createCate);

module.exports = route;

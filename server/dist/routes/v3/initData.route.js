const express = require("express");
const {
  getInitData
} = require("../../controllers/initialData.controller");
const route = express.Router();
route.post("/init-data", getInitData.getData);
route.post("/data", getInitData.getDataAdmin);
module.exports = route;
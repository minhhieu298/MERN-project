const express = require("express");
const route = express.Router();
const { auth } = require("../../middleware/auth");
const { chatCtrl } = require("../../controllers/chat.controller");

route.post("/new-message", auth.authUser, chatCtrl.createNewMes);
route.post("/messages", auth.authUser, chatCtrl.getMessage);

module.exports = route;

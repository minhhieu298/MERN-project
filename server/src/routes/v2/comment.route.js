const { commentCtrl } = require("../../controllers/comment.controller");
const express = require("express");
const route = express.Router();
const { auth } = require("../../middleware/auth");

route.post("/create-new-comment", auth.authUser, commentCtrl.createComment);
route.post("/update-comment", auth.authUser, commentCtrl.updateComment);
route.post("/delete-comment", auth.authUser, commentCtrl.deleteComment);

module.exports = route;

const express = require("express");
const {
  userCtrl
} = require("../../controllers/user.controller");
const {
  auth
} = require("../../middleware/auth");
const route = express.Router();
route.post("/register", userCtrl.register);
route.post("/verify-account", userCtrl.verifyOtp);
route.post("/login", userCtrl.login);
route.get("/refresh", userCtrl.getRefreshToken);
route.post("/forgot-password", userCtrl.forgotPassword);
route.post("/change-password", userCtrl.changePassword);
route.post("/update-user", auth.authUser, userCtrl.updateUser);
route.get("/me", auth.authUser, userCtrl.getMe);
route.post("/logout", userCtrl.logout);
module.exports = route;
const express = require("express");
const route = express.Router();

route.use("/v1", require("./v1/product.admin.route"));
route.use("/v1", require("./v1/category.admin.route"));
route.use("/v1", require("./v1/order.admin.route"));
route.use("/v1", require("./v1/auth.admin.route"));

route.use("/v2", require("./v2/auth.route"));
route.use("/v2", require("./v2/product.route"));
route.use("/v2", require("./v2/address.route"));
route.use("/v2", require("./v2/cart.route"));
route.use("/v2", require("./v2/category.route"));
route.use("/v2", require("./v2/order.route"));

route.use("/v3", require("./v3/initData.route"));

module.exports = route;

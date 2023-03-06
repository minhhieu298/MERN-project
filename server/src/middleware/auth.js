const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

module.exports.auth = {
  authUser: (req, res, next) => {
    const token = req.headers.authorization || req.headers.Authorization;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
      if (err)
        return res.status(400).json({ message: "Invalid Authentication" });
      req.user = await User.findById(decoded.id);
      next();
    });
  },
  authAdmin: async (req, res, next) => {
    const user = await User.findOne({ _id: req.user.id });
    if (user.role !== "admin") {
      return res.status(400).json({ message: "You are not admin" });
    }
    next();
  },
};

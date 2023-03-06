const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "user"
  },
  avatar: {
    type: String,
    default: "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
  },
  refreshToken: String
}, {
  collection: "users",
  timestamps: true
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
userSchema.methods.getAccessToken = function () {
  return jwt.sign({
    id: this._id
  }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d"
  });
};
userSchema.methods.getRefreshToken = function () {
  return jwt.sign({
    UserInfor: {
      username: this.username,
      email: this.email
    }
  }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d"
  });
};
module.exports = mongoose.model("User", userSchema);
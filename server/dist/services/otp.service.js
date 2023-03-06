const Otp = require("../models/otp.model");
const bcrypt = require("bcrypt");
module.exports.otpService = {
  validOtp: async ({
    otp,
    hashOtp
  }) => {
    try {
      const isValid = await bcrypt.compare(otp, hashOtp);
      return isValid;
    } catch (error) {}
  },
  insertOtp: async ({
    username,
    email,
    password,
    otp
  }) => {
    try {
      const hashOtp = await bcrypt.hash(otp, 10);
      const insertOtp = await Otp.create({
        username,
        email,
        password,
        otp: hashOtp
      });
      return insertOtp ? 1 : 0;
    } catch (error) {
      console.log(error);
    }
  }
};
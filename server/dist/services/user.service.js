const User = require("../models/user.model");
const sendOTP = require("../utils/sendMail");
const Otp = require("otp-generator");
const bcrypt = require("bcrypt");
const OTP = require("../models/otp.model");
const {
  otpService
} = require("./otp.service");
module.exports.userService = {
  verifyOTP: async ({
    otp,
    email
  }) => {
    try {
      const holdOtp = await OTP.find({
        email
      });
      if (!holdOtp.length) {
        return {
          code: 500,
          message: "OTP không hợp lệ"
        };
      }
      const lastOtp = holdOtp[holdOtp.length - 1];
      const isValid = await otpService.validOtp({
        otp,
        hashOtp: lastOtp.otp
      });
      if (!isValid) {
        return {
          code: 404,
          message: "OTP đã hết hạn"
        };
      }
      if (isValid && email === lastOtp.email) {
        const user = await User.create({
          email: email,
          firstName: lastOtp.firstName,
          lastName: lastOtp.lastName,
          username: lastOtp.username,
          password: lastOtp.password
        });
        if (user) {
          await OTP.deleteMany({
            email
          });
        }
        return {
          code: 201,
          element: user
        };
      }
    } catch (error) {
      console.log(error);
    }
  },
  register: async ({
    username,
    email,
    password
  }) => {
    if (!username || !email || !password) {
      return {
        code: 500
      };
    }
    if (!/^[a-z0-9]*$/.test(username)) {
      return {
        code: 500,
        message: "Tên người dùng chỉ gồm kí tự thường và số"
      };
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return {
        code: 500,
        message: "Địa chỉ email không hợp lệ"
      };
    }
    if (password.length < 8) {
      return {
        code: 500
        // message: "Mật khẩu tối thiểu 8 kí tự",
      };
    }

    const user = await User.findOne({
      email
    });
    if (user) {
      return {
        code: 500,
        message: "Địa chỉ email đã được sử dụng"
      };
    }
    //OTP
    const otp = Otp.generate(6, {
      digits: true,
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false
    });
    console.log("otp", otp);
    sendOTP({
      text: "Verify your email",
      email: email,
      otp: otp
    });
    return {
      code: 201,
      element: await otpService.insertOtp({
        username,
        email,
        password,
        otp
      }),
      message: "Kiểm tra OTP trong email để xác thực tài khoản"
    };
  },
  loginUser: async ({
    email,
    password
  }) => {
    const user = await User.findOne({
      email: email
    });
    if (!user) {
      return {
        code: 400,
        message: {
          email: "Email bạn nhập không kết nối với tài khoản nào"
        }
      };
    } else {
      if (!password) {
        return {
          code: 400,
          message: {
            password: "Mật khẩu bạn đã nhập không chính xác"
          }
        };
      } else {
        // const isCheck = await user.comparePassword(password);
        const isCheck = await bcrypt.compare(password, user.password);
        if (!isCheck) {
          return {
            code: 400,
            message: {
              password: "Mật khẩu bạn đã nhập không chính xác"
            }
          };
        }
      }
    }
    return {
      code: 200,
      message: "success",
      user
    };
  },
  forgot: async ({
    email
  }) => {
    let user = await User.findOne({
      email
    });
    if (!user) {
      return {
        code: 400,
        message: "Không tìm thấy tài khoản hoặc tên người dùng"
      };
    }
    const otp = Otp.generate(6, {
      digits: true,
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false
    });
    console.log("otp forgot", otp);
    sendOTP({
      text: "Reset password",
      email,
      otp: otp
    });
    return {
      code: 201,
      element: await otpService.insertOtp({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
        email: email,
        otp: otp
      }),
      message: "OTP đã được gửi tới tài khoản của bạn"
    };
  },
  verifyChange: async ({
    otp,
    email,
    password
  }) => {
    const holdOtp = await _OTP.find({
      email
    });
    if (!holdOtp.length) {
      return {
        code: 404,
        message: "OTP không hợp lệ"
      };
    }
    const lastOtp = holdOtp[holdOtp.length - 1];
    const isValid = await otpService.validOtp({
      otp,
      hashOtp: lastOtp.otp
    });
    if (!isValid) {
      return {
        code: 404,
        message: "OTP không hợp lệ"
      };
    }
    if (isValid && email === lastOtp.email) {
      const user = await User.findOne({
        email
      });
      if (user) {
        await _OTP.deleteMany({
          email
        });
        user.password = password;
        await user.save();
      }
      return {
        code: 200,
        message: "Mật khẩu đã được thay đổi"
      };
    }
  }
};
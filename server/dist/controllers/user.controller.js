const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {
  userService
} = require("../services/user.service");
const cloudinary = require("cloudinary");
const {
  pageService
} = require("../services/page.service");
module.exports.userCtrl = {
  register: async (req, res) => {
    const {
      username,
      email,
      password
    } = req.body;
    const {
      code,
      message
    } = await userService.register({
      username,
      email,
      password
    });
    res.status(code).json({
      message
    });
  },
  verifyOtp: async (req, res) => {
    const {
      otp,
      email
    } = req.body;
    const {
      code,
      message,
      element
    } = await userService.verifyOTP({
      otp,
      email
    });
    res.status(code).json({
      message,
      element
    });
  },
  login: async (req, res) => {
    const {
      email,
      password
    } = req.body;
    const {
      code,
      message,
      user
    } = await userService.loginUser({
      email,
      password
    });
    if (!user) {
      res.status(code).json({
        message
      });
    } else {
      const refresh_token = await user.getRefreshToken();
      const access_token = await user.getAccessToken();
      user.refreshToken = refresh_token;
      await user.save();
      res.cookie("token", refresh_token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
      });
      res.status(code).json({
        access_token
      });
    }
  },
  getRefreshToken: async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.token) return res.status(401).json({
      message: "Unauthorized"
    });
    const user = await User.find();
    const data = user.find(item => item.refreshToken === cookies.token);
    if (!data) {
      return res.status(403).json({
        message: "Forbidden"
      });
    }
    jwt.verify(cookies.token, process.env.REFRESH_TOKEN_SECRET, async (err, decoded) => {
      if (err) return res.status(403).json({
        message: "Forbidden"
      });
      if (decoded) {
        const access_token = await data.getAccessToken();
        res.json({
          access_token
        });
      }
    });
  },
  forgotPassword: async (req, res) => {
    const {
      email
    } = req.body;
    const {
      code,
      message
    } = await useService.forgot({
      email
    });
    res.status(code).json({
      message
    });
  },
  changePassword: async (req, res) => {
    const {
      otp,
      email,
      password
    } = req.body;
    const {
      code,
      message
    } = await useService.verifyChange({
      otp,
      email,
      password
    });
    res.status(code).json({
      message
    });
  },
  logout: async (req, res) => {
    const cookie = req.cookies;
    if (!cookie.token) return res.status(204);
    const user = await User.findOne({
      refreshToken: cookie.token
    });
    if (!user) return res.status(204);
    user.refreshToken = undefined;
    await user.save();
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "None",
      secure: true
    });
    res.status(200).json({
      message: "Log out"
    });
  },
  getMe: async (req, res) => {
    let user = await User.findById(req.user.id).select("email username avatar role");
    if (!user) return res.status(404).json({
      message: "Không tìm thấy tên người dùng"
    });
    res.status(200).json({
      user
    });
  },
  updateUser: async (req, res) => {
    const newPassword = req.body.password;
    if (newPassword) {
      if (newPassword.length < 8) {
        return res.status(400).json({
          message: "Mật khẩu tối thiểu 8 kí tự"
        });
      } else {
        const hashPass = await bcrypt.hash(newPassword, 10);
        User.updateOne({
          _id: req.user.id
        }, {
          $set: {
            password: hashPass
          }
        }).exec((error, data) => {
          if (error) return res.status(400).json({
            message: error.message
          });
          if (data) return res.status(200).json({
            data
          });
        });
      }
    } else {
      if (req.body.avatar) {
        const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
          folder: "avatar"
        });
        req.body.avatar = result.secure_url;
      }
      User.updateOne({
        _id: req.user.id
      }, {
        $set: req.body
      }).exec((error, data) => {
        if (error) return res.status(400).json({
          message: error.message
        });
        if (data) return res.status(200).json({
          data
        });
      });
    }
  },
  getListUser: async (req, res) => {
    const {
      page,
      pageSize,
      sort,
      keyword
    } = req.query;
    if (Number(page) <= 0) {
      return res.status(200).json({
        data: []
      });
    }
    const users = await pageService.listUser({
      page: +page,
      pageSize: +pageSize,
      sort,
      keyword
    });
    res.status(200).json({
      data: users[0]?.users?.length > 0 ? {
        users: users[0]?.users,
        totalOrder: {
          total: Number(users[0]?.meta[0]?.total),
          page: Number(users[0]?.meta[0]?.page),
          pageSize: Number(pageSize),
          totalPage: Math.ceil(Number(users[0]?.meta[0]?.total) / Number(pageSize))
        }
      } : []
    });
  }
};
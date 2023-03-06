const nodemailer = require("nodemailer");

const sendOTP = ({ text, email, otp }) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASSWORD,
    },
  });
  let mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: text,
    html: `<p>Your otp is ${otp}</p>`,
  };

  transporter.sendMail(mailOptions, (err, infor) => {
    if (err) return err;
    return infor;
  });
};

module.exports = sendOTP;

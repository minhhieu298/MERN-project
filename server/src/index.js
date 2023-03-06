const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoConnect = require("./config/database");
const cloudinary = require("cloudinary");

const app = express();
//config port
const PORT = process.env.PORT || 5000;
dotenv.config({ path: "src/config/.env" });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(cookieParser());
app.use(
  cors({
    // origin: '*',
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    credentials: true,
  })
);

mongoConnect();

app.use(require("./routes/index"));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

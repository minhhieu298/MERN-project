const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoConnect = require("./config/database");
const cloudinary = require("cloudinary");
const http = require("http");
const { Server } = require("socket.io");

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

//set up socket
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    credentials: true,
  },
  // transports: ["websocket"],
});

let users = [];
const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  //when connected
  // console.log("connected");

  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  //send and get mes
  socket.on("sendMessage", ({ senderId, text, receiverId }) => {
    const user = getUser(receiverId);
    io.to(user?.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  //disconected
  socket.on("disconnect", () => {
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

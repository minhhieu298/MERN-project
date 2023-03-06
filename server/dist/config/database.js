const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connect");
  } catch (error) {
    console.log("Fail");
    throw error;
  }
};
module.exports = mongoConnect;
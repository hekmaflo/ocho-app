const mongoose = require("mongoose");
require("dotenv").config(); // Add this line

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Successfully connected to MongoDB!");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });
mongoose.set("debug", true);
const db = mongoose.connection;

module.exports = db;

// const mongoose = require("mongoose");

// let MONGODB_URI = "mongodb://127.0.0.1:27017/ochoDatabase";

// mongoose
//   .connect(MONGODB_URI)
//   .then(() => {
//     console.log("Successfully connected to MongoDB.");
//   })
//   .catch((e) => {
//     console.error("Connection error", e.message);
//   });
// mongoose.set("debug", true);
// const db = mongoose.connection;

// module.exports = db;

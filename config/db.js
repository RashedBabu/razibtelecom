const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database Connection Success");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;

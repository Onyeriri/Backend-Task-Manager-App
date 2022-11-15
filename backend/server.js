const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");

const app = express();

app.get("/", (req, res) => {
  res.send("<h2>Welcome to home page...</h2>");
});

const PORT = process.env.PORT || 5000;

const startSever = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

startSever();

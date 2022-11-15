const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h2>Welcome to home page...</h2>");
});

// create a task
app.post("/api/tasks", async (req, res) => {
  console.log(req.body);
  res.send("<h2>Task creation page...</h2>");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((err) => console.log(err));

const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Task = require("./models/taskModel");

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// create a task
app.post("/api/tasks", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
});

// get all task
app.get("/api/tasks", async (req, res) => {
  try {
    const task = await Task.find();
    res.status(200).json(task);
  } catch (error) {
    res.status(5000).json({ msg: error.message });
  }
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((err) => console.log(err));

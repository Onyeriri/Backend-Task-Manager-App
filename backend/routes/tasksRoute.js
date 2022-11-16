const express = require("express");
const Task = require("../models/taskModel");

const router = express.Router();

// create a task
router.post("/api/tasks", async (req, res) => {
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
router.get("/api/tasks", async (req, res) => {
  try {
    const task = await Task.find();
    res.status(200).json(task);
  } catch (error) {
    res.status(5000).json({ msg: error.message });
  }
});

module.exports = router;

const express = require("express");
const Task = require("../models/taskModel");
const {
  createTask,
  getAllTask,
  getOneTask,
  deleteTask,
} = require("../controllers/tasksController");
const router = express.Router();

router.post("/api/tasks", createTask);
router.get("/api/tasks", getAllTask);
router.get("/api/tasks/:id", getOneTask);
router.delete("/api/tasks/:id", deleteTask);

module.exports = router;

const express = require("express");
const Task = require("../models/taskModel");
const {
  createTask,
  getAllTask,
  getOneTask,
  deleteTask,
  updateTask,
} = require("../controllers/tasksController");
const router = express.Router();

router.post("/api/tasks", createTask);
router.get("/api/tasks", getAllTask);
router.get("/api/tasks/:id", getOneTask);
router.delete("/api/tasks/:id", deleteTask);
router.put("/api/tasks/:id", updateTask);

module.exports = router;

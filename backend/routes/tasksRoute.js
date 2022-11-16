const express = require("express");
const Task = require("../models/taskModel");
const { createTask, getAllTask } = require("../controllers/tasksController");
const router = express.Router();

// create a task
router.post("/api/tasks", createTask);

// get all task
router.get("/api/tasks", getAllTask);

module.exports = router;

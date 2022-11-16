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

router.route("/").post(createTask).get(getAllTask);

router
  .route("/:id")
  .get(getOneTask)
  .get(getAllTask)
  .delete(deleteTask)
  .put(updateTask);

module.exports = router;

const Task = require("../models/taskModel");

// create task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

// get all task
const getAllTask = async (req, res) => {
  try {
    const task = await Task.find();
    res.status(200).json(task);
  } catch (error) {
    res.status(5000).json({ msg: error.message });
  }
};

module.exports = {
  createTask,
  getAllTask,
};

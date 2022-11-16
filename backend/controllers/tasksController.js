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
    const task = await Task.find().sort({
      createdAt: -1,
    });
    res.status(200).json(task);
  } catch (error) {
    res.status(5000).json({ msg: error.message });
  }
};

// get one task
const getOneTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json(`No task found with id: ${id}`);
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// delete one task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndDelete(id);

    if (!task) {
      return res.status(404).json("Id not found!!!");
    }

    res.status(200).send("Task delete");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// update a task
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json("Id not found!!!");
    }

    res.status(200).send("Task updated");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createTask,
  getAllTask,
  getOneTask,
  deleteTask,
  updateTask,
};

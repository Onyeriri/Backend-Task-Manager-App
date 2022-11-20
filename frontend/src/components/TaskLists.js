import TaskForm from "./TaskForm";
import Task from "./Task";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { URL } from "../App";
import loadingImg from "../assets/loader.gif";

const TaskLists = () => {
  const [formData, setFormData] = useState({
    name: "",
    completed: false,
  });

  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [totalTasks, setTotalTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [taskID, setTaskID] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getTasks = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${URL}/api/tasks`);
      setTasks(data);
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const createTask = async (e) => {
    e.preventDefault();
    if (name === "") {
      return toast.error("Input field cannot be empty");
    }

    try {
      await axios.post(`${URL}/api/tasks`, formData);
      setFormData({ ...formData, name: "" });
      getTasks();
      toast.success("Data successfully registered");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDelete = async (id) => {
    // const deleteTask = e.currentTarget.id;
    try {
      await axios.delete(`${URL}/api/tasks/${id}`);
      getTasks();
      toast.success("Task deleted");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getSingleTask = async (task) => {
    setFormData({ name: task.name, completed: false });
    setTaskID(task._id);
    setIsEditing(true);
  };

  const { name } = formData;

  const updateTask = async () => {
    if (name === "") {
      return toast.error("Input field cannot be empty");
    }

    try {
      await axios.put(`${URL}/api/tasks/${taskID}`, formData);
      setFormData(...formData, {
        name: "",
      });
      setIsEditing(false);
      setIsCompleted(false);
      getTasks();
      toast.success("Task edited successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const taskCompleted = async (task) => {
    const newFormData = {
      name: task.name,
      completed: true,
    };
    try {
      await axios.put(`${URL}/api/tasks/${task._id}`, newFormData);
      setIsCompleted(true);
      getTasks();
      toast.success("Task marked as completed");
    } catch (error) {
      toast.error(error.message);
    }
  };

  let count = tasks.filter((task) => task.completed === true);

  console.log(count.length);

  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm
        name={name}
        handleInputChange={handleInputChange}
        createTask={createTask}
        isEditing={isEditing}
        updateTask={updateTask}
      />
      <div className="--flex-between --pb">
        <p>
          <b>Total Tasks:</b> {tasks.length}
        </p>
        <p>
          <b>Completed Tasks:</b> {count.length}
        </p>
      </div>
      <hr />
      {isLoading && (
        <div className="--flex-center">
          <img src={loadingImg} alt=" " />
        </div>
      )}
      {!isLoading && tasks.length === 0 ? (
        <p className="--py">No task added, please add a task</p>
      ) : (
        <>
          {tasks.map((task, index) => {
            return (
              <Task
                key={index}
                task={task}
                index={index}
                handleDelete={handleDelete}
                getSingleTask={getSingleTask}
                taskCompleted={taskCompleted}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default TaskLists;

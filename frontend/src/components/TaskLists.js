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
  const [completedTasks, setCompletedTasks] = useState([]);
  const [totalTasks, setTotalTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      getTasks();
      toast.success("Task deleted");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const { name } = formData;

  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm
        name={name}
        handleInputChange={handleInputChange}
        createTask={createTask}
      />
      <div className="--flex-between --pb">
        <p>
          <b>Total Tasks:</b> 0
        </p>
        <p>
          <b>Completed Tasks:</b> 0
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
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default TaskLists;

import TaskLists from "./components/TaskLists";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <div className="app">
      <div className="task-container">
        <TaskLists />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;

import TaskLists from "./components/TaskLists";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

import { FaEdit, FaCheckDouble, FaRegTrashAlt } from "react-icons/fa";

const Task = ({ task, id }) => {
  let { name } = task;
  return (
    <div className="task">
      <p>
        <b>{id + 1}.</b> {name}
      </p>
      <div className="task-icons">
        <FaCheckDouble color="green" />
        <FaEdit color="purple" />
        <FaRegTrashAlt color="red" />
      </div>
    </div>
  );
};

export default Task;

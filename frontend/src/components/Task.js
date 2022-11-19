import { FaEdit, FaCheckDouble, FaRegTrashAlt } from "react-icons/fa";

const Task = ({ task, index, handleDelete }) => {
  let { name, _id } = task;

  return (
    <div className="task">
      <p>
        <b>{index + 1}.</b> {name}
      </p>
      <div className="task-icons">
        <FaCheckDouble color="green" />
        <FaEdit color="purple" />
        <FaRegTrashAlt onClick={() => handleDelete(_id)} color="red" />
      </div>
    </div>
  );
};

export default Task;

const TaskForm = ({ name, handleInputChange, createTask }) => {
  return (
    <div>
      <form className="task-form" onSubmit={createTask}>
        <input
          type="text"
          placeholder="Add a Task"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TaskForm;

const TaskForm = ({
  name,
  handleInputChange,
  createTask,
  isEditing,
  updateTask,
}) => {
  return (
    <div>
      <form
        className="task-form"
        onSubmit={isEditing ? updateTask : createTask}
      >
        <input
          type="text"
          placeholder="Add a Task"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <button type="submit">{isEditing ? "Edit" : "Add"}</button>
      </form>
    </div>
  );
};

export default TaskForm;

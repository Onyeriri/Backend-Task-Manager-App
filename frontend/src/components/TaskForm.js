const TaskForm = ({ name }) => {
  const handleInputChange = () => {};
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Add a Task"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default TaskForm;

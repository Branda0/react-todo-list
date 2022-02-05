import { useState } from "react";

const TaskEntry = ({ setTasks, tasks }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask) {
      const newTasks = [...tasks];
      newTasks.unshift([newTask, false]);
      setTasks(newTasks);
      setNewTask("");
    }
  };
  return (
    <form className="entry" onSubmit={handleSubmit}>
      <input
        className="input-entry"
        type="text"
        value={newTask}
        onChange={(event) => {
          setNewTask(event.target.value);
        }}
      />
      <button className="submit-btn" type="submit">
        Add task
      </button>
    </form>
  );
};

export default TaskEntry;

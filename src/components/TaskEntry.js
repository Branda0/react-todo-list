import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const axios = require("axios");

const TaskEntry = ({ setTasks, tasks, chargeDB }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newTask) {
      const data = {
        title: newTask,
        done: false,
      };

      try {
        const response = await axios.post("https://brandao-todo-list.herokuapp.com/form", data);
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }

      const newTasks = [...tasks];
      newTasks.unshift([newTask, false, 0]);
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
      <FontAwesomeIcon className="icon-sync" icon="sync-alt" onClick={chargeDB} />
      <button className="submit-btn" type="submit">
        Add task
      </button>
    </form>
  );
};

export default TaskEntry;

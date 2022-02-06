import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const axios = require("axios");

const Task = ({ task, setTasks, tasks, index }) => {
  const handleDelete = async () => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    try {
      const response = await axios.get(`http://localhost:3000/delete?title=${task[0]}`);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCheck = async () => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    //IF checked => (task already done) => push in end of list
    if (task[1]) {
      newTasks.unshift([task[0], false]);
    } else {
      newTasks.push([task[0], true]);
    }
    setTasks(newTasks);
    try {
      const response = await axios.get(`http://localhost:3000/update?title=${task[0]}`);

      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="task-container">
      <input className="input" type="checkbox" onChange={handleCheck} checked={task[1]} />
      <span className="task-text" style={{ textDecoration: task[1] && "line-through" }}>
        {task}
      </span>
      <FontAwesomeIcon className="icon-trash" icon="trash" onClick={handleDelete} />
    </div>
  );
};

export default Task;

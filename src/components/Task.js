import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ task, setTasks, tasks, index }) => {
  const handleClick = () => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleCheck = () => {
    const newTasks = [...tasks];

    newTasks.splice(index, 1);
    //IF checked => (task already done) => push in end of list
    if (task[1]) {
      newTasks.unshift([task[0], false]);
    } else {
      newTasks.push([task[0], true]);
    }
    setTasks(newTasks);
  };

  return (
    <div className="task-container">
      <input className="input" type="checkbox" onChange={handleCheck} checked={task[1]} />
      <span className="task-text" style={{ textDecoration: task[1] && "line-through" }}>
        {task}
      </span>
      <FontAwesomeIcon className="icon-trash" icon="trash" onClick={handleClick} />
    </div>
  );
};

export default Task;

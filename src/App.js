import { useState } from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faListAlt } from "@fortawesome/free-regular-svg-icons";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Task from "./components/Task";
import TaskEntry from "./components/TaskEntry";
import TaskSearch from "./components/TaskSearch";

library.add(faTrash, faListAlt, faMoon, faSun);

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [nightmode, setNightmode] = useState(false);
  return (
    <div className={`app-container ${nightmode && "night"}`}>
      <Header setNightmode={setNightmode} nightmode={nightmode} />
      <div className="main-container">
        <TaskEntry setTasks={setTasks} tasks={tasks} />
        <TaskSearch setSearch={setSearch} />
        {tasks
          .filter((element) => element[0].toLowerCase().includes(search.toLowerCase()))
          .map((elem, index) => {
            return <Task key={index} task={elem} index={index} setTasks={setTasks} tasks={tasks} />;
          })}
      </div>

      <Footer />
    </div>
  );
}

export default App;

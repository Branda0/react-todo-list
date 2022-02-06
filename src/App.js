import { useState } from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faMoon, faSun, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { faListAlt } from "@fortawesome/free-regular-svg-icons";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Task from "./components/Task";
import TaskEntry from "./components/TaskEntry";
import TaskSearch from "./components/TaskSearch";

const axios = require("axios");

library.add(faTrash, faListAlt, faMoon, faSun, faSyncAlt);

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [nightmode, setNightmode] = useState(false);

  const chargeDB = async () => {
    try {
      const dbTasks = await axios.get("https://brandao-todo-list.herokuapp.com/");
      console.log(dbTasks.data);
      const chargedTasks = [];
      dbTasks.data.map((elem, index) => {
        return chargedTasks.push([elem.title, elem.done]);
      });
      setTasks(chargedTasks);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={`app-container ${nightmode && "night"}`}>
      <Header setNightmode={setNightmode} nightmode={nightmode} />
      <div className="main-container">
        <TaskEntry setTasks={setTasks} tasks={tasks} chargeDB={chargeDB} />
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

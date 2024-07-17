import { tasks as data } from "./task";
import TaskForms from "./TaskForms";
import { useState, useEffect } from "react";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);
  function createTask({task}){
    console.log(task);
    console.log('como estas');
    console.log(task);
  }
  return (
    <>
      <TaskForms createTask ={createTask}/>
      <TaskList tasks={tasks} />
    </>
  );
}



export default App;

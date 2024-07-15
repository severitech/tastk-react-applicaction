import { tasks as data } from "./task";
import TaskForms from "./TaskForms";
import { useState, useEffect } from "react";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);
  function createTask(taskTitle){
    setTasks([...tasks, {
      title: taskTitle,
      id: tasks.length,
      description: "Nueva Tarea"
    }])
  }
  return (
    <>
      <TaskForms createTask ={createTask}/>
      <TaskList tasks={tasks} />
    </>
  );
}



export default App;

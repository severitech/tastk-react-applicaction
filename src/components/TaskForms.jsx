import { useState, useRef, useContext } from "react";

import {TaskContext} from '../context/TaskContext'

function TaskForms() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const inputRef = useRef(null);

  const {createTask} = useContext(TaskContext)
  
  const handleSumit = (e) => {
    e.preventDefault();
    createTask({title,description});
    setTitle("")
    setDescription("")
    inputRef.current.focus(); 
  };

  return (
    <form onSubmit={handleSumit}>
      <h1>Escribe tu tarea</h1>
      <h2>Nombre de Tarea</h2>
      <input ref={inputRef}
        type="text"
        placeholder="Escribe tu tarea"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title} autoFocus
      />
      <p>Descripcion</p>
      <textarea
        type="text"
        placeholder="Descripcion de tarea"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      />
      <br />
      <button>Guardar</button>
    </form>
  );
}


export default TaskForms;
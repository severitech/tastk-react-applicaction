import { useState, useRef, useContext } from "react";

import { TaskContext } from "../context/TaskContext";

function TaskForms() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const inputRef = useRef(null);

  const { createTask } = useContext(TaskContext);

  const handleSumit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") {
      alert("Campos Vacíos");
      return; 
    }
    
    createTask({ title, description });
    setTitle("");
    setDescription("");
    inputRef.current.focus();
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSumit} className="bg-slate-700 p-10 mb-4 rounded-md">
        <h1 className="text-4xl font-bold text-white mb-3">Formulario de Tareas</h1>
        <h2 className="text-slate-300 mb-3">Nombre de Tarea</h2>
        <input
          ref={inputRef}
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2 placeholder-gray-400"
        />
        <p className="text-slate-300 mb-3">Descripción</p>
        <textarea 
          type="text"
          placeholder="Descripción de tarea"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}className="bg-slate-300 p-3 w-full mb-2 placeholder-gray-400"
        />
        <br />
        <button className="bg-indigo-500 px-3 py 1 rounded-md text-white 
        hover:bg-indigo-900">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForms;

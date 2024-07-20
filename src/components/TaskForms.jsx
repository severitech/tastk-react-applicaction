import { useState, useRef, useContext } from "react";

import { TaskContext } from "../context/TaskContext";

function TaskForms() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const inputRef = useRef(null);

  const { createTask } = useContext(TaskContext);

  const handleSumit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    if (title.trim() === "" || description.trim() === "") {
      alert("Campos Vacíos");
      return; // Detener la ejecución si hay campos vacíos
    }
    
=======
>>>>>>> 1f519a22da12b6b8f034f219b3461d0710bd5f73
    createTask({ title, description });
    setTitle("");
    setDescription("");
    inputRef.current.focus();
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSumit} className="bg-slate-700 p-10 mb-4 rounded-md">
<<<<<<< HEAD
        <h1 className="text-4xl font-bold text-white mb-3">Formulario de Tareas</h1>
=======
        <h1 className="text-2x1 font-bold text-white mb-3">Escribe tu tarea</h1>
>>>>>>> 1f519a22da12b6b8f034f219b3461d0710bd5f73
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
<<<<<<< HEAD
        <p className="text-slate-300 mb-3">Descripción</p>
        <textarea 
          type="text"
          placeholder="Descripción de tarea"
=======
        <p className="text-slate-300 mb-3">Descripcion</p>
        <textarea 
          type="text"
          placeholder="Descripcion de tarea"
>>>>>>> 1f519a22da12b6b8f034f219b3461d0710bd5f73
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

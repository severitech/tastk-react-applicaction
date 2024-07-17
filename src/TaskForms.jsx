import { useState } from "react";
import PropTypes from 'prop-types';



function TaskForms({createTask}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
const handleSumit=(e)=>{
    e.preventDefault();
    const NewTask = {
      title: title,
      description: description
    }
    console.log(NewTask);
    createTask(NewTask);
}

  return (
  
      <form onSubmit={handleSumit}>
        <h1>Escribe tu tarea</h1>
        <h2>Nombre de Tarea</h2>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <p>Descripcion</p>
        <input
          type="text"
          placeholder="Descripcion de tarea"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button>Guardar</button>
      </form>

  );
}


TaskForms.propTypes = {
  createTask: PropTypes.func.isRequired,
  
}
export default TaskForms;
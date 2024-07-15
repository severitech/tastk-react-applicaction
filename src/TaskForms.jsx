import { useState } from "react";



function TaskForms({createTask}) {
  const [title, setTitle] = useState("");

const handleSumit=(e)=>{
    e.preventDefault();
    
    createTask(title)
}

  return (
    <div>
      <form onSubmit={handleSumit}>
        <h1>Escribe tu tarea</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default TaskForms;

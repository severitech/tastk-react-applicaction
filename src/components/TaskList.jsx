import {useContext} from 'react';
import {TaskContext} from '../context/TaskContext'

import TaskCard from './TaskCard'

function TaskList() {

const {tasks} = useContext(TaskContext)

  if (tasks.length === 0) {
<<<<<<< HEAD
    return <h1 className='text-white text-4xl font-bold text-center'>No hay tareas aún</h1>;
  }
  return (
    <div className='grid grid-cols-3 gap-2 '>
=======
    return <h1 className='text-white text-4xl font-bold text-center'>No hay tareas aun</h1>;
  }
  return (
    <div className='grid grid-cols-4 gap-2 '>
>>>>>>> 1f519a22da12b6b8f034f219b3461d0710bd5f73
      {tasks.map((task) => (
        <TaskCard key={task.id} task= {task}/>
      ))}
    </div>
  );
}


export default TaskList;

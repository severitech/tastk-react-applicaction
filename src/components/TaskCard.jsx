
import {useContext} from 'react';
import {TaskContext} from '../context/TaskContext'
import PropTypes from 'prop-types';

function TaskCard({task}) {
  const {deleteTask}=useContext(TaskContext)
  return (
    <div className='bg-gray-800 text-white p-4 rounded-md'>
<<<<<<< HEAD
      <h1 className='text-3xl font-bold capitalize'>{task.title}</h1>
      <p className='text-gray-500 text-xl text-x1'>{task.description}</p>
=======
      <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
      <p className='text-gray-500 text-sm text-x1'>{task.description}</p>
>>>>>>> 1f519a22da12b6b8f034f219b3461d0710bd5f73
      <button className='bg-red-500 rounded-md px-2 py-1 m mt-4 hover:bg-red-700' onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
    </div>
  );
}

export default TaskCard;

TaskCard.propTypes = {
  task: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string
    })
}
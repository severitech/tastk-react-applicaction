import PropTypes from 'prop-types';

import TaskCard from './TaskCard'
function TaskList({ tasks, deleteTask }) {
  if (tasks.length === 0) {
    return <h1>No hay tareas aun</h1>;
  }
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask = {deleteTask}/>
      ))}
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,

  deleteTask: PropTypes.func
};

export default TaskList;

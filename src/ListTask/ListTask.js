import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editTask, toggleTask } from './store';

const ListTask = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleEditTask = (id, description) => {
    const newDescription = prompt('Enter a new description', description);
    if (newDescription) {
      dispatch(editTask(id, newDescription));
    }
  };

  const handleToggleTask = id => {
    dispatch(toggleTask(id));
  };

  return (
    <div>
      <h3>All Tasks</h3>
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.isDone}
                onChange={() => handleToggleTask(task.id)}
              />
              <span
                style={{
                  textDecoration: task.isDone ? 'line-through' : 'none',
                }}
              >
                {task.description}
              </span>
              <button onClick={() => handleEditTask(task.id, task.description)}>Edit</button>
            </li>
          ))}
        </ul>
      )}
    </div>
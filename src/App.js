import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Work 1', status: 'Allocate' },
    { id: 2, title: 'Work 2', status: 'Not Allocate' },
    { id: 3, title: 'Work 3', status: 'New' },
    { id: 4, title: 'Work 4', status: 'Done' },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = () => {
    if (newTaskTitle.trim() === '') return;

    const newTask = {
      id: tasks.length + 1,
      title: newTaskTitle,
      status: 'Not assigned',
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleUpdateTaskStatus = (id, status) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Management App</h1>
      <div>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.status}
            <button onClick={() => handleUpdateTaskStatus(task.id, 'done')}>
              Mark As Done
            </button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
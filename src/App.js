import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Job Task 1', status: 'Assigned' },
    { id: 2, title: 'Job Task 2', status: 'Not Assigned' },
    { id: 3, title: 'Job Task 3', status: 'New' },
    { id: 4, title: 'Job Task 4', status: 'Completed' },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = () => {
    if (newTaskTitle.trim() === '') return;

    const newTask = {
      id: tasks.length + 1,
      title: newTaskTitle,
      status: 'not assigned',
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
      <h1>Task Job Management App</h1>
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
              Check as Completed
            </button>
            <button onClick={() => handleDeleteTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
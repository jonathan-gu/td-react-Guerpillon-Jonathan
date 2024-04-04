import React, { useEffect, useState } from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import TaskForm from './Components/TaskForm/TaskForm';
import TaskList from './Components/TaskList/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState(() => {
    const tasksInLocalStorage = localStorage.getItem("tasks")
    if (tasksInLocalStorage) {
      return JSON.parse(tasksInLocalStorage);
    } else {
      return []
    }
  })
  const [filter, setFilter] = useState('all')
  
  useEffect(() => {
    const tasksInLocalStorage = localStorage.getItem("tasks")
    if (tasksInLocalStorage) {
      setTasks(JSON.parse(tasksInLocalStorage))
    }
  }, [])

  useEffect(() => {
    if (filter === 'all') {
        setFilteredTasks(tasks);
    } else if (filter === 'done') {
        setFilteredTasks(tasks.filter(task => task.completed));
    } else if (filter === 'undone') {
        setFilteredTasks(tasks.filter(task => !task.completed));
    }
  }, [tasks, filter]);

  return (
    <>
      <Header />
      <section>
        <TaskForm tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={filteredTasks} setTasks={setTasks} setFilter={setFilter} />
      </section>
    </>
  );
}

export default App;
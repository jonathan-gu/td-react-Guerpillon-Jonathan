import React, { useEffect, useState } from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import TaskForm from './Components/TaskForm/TaskForm';
import TaskList from './Components/TaskList/TaskList';

function App() {
  useEffect(() => {
    const tasksInLocalSotrage = localStorage.getItem("tasks")
    setTasks(JSON.parse(tasksInLocalSotrage))
  }, [])

  const [tasks, setTasks] = useState([]);

  return (
    <>
      <Header />
      <section>
        <TaskForm tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </section>
    </>
  );
}

export default App;
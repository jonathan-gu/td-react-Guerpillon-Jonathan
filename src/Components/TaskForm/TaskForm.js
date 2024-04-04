import React, { useState } from "react";
import "./TaskForm.css"

const TaskForm = ({ tasks, setTasks }) => {
    const [task, setTask] = useState("");

    const handleOnChange = (event) => {
        setTask(event.target.value)
    }

    const handleOnClick = () => {
        if (task.length > 0) {
            const tasksWithNewTask = [...tasks, { name: task, completed: false }]
            setTasks(tasksWithNewTask)
            localStorage.setItem("tasks", JSON.stringify(tasksWithNewTask))
            setTask("");
        }
    }

    return (
        <div data-cy="task-form" className="task-form">
            <input data-cy="task-input" value={task} onChange={handleOnChange} />
            <button data-cy="add-task-btn" onClick={handleOnClick}>Ajouter</button>
        </div>
    );
}

export default TaskForm;
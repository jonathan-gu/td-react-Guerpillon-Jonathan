import React, { useState, useEffect } from "react";
import "./TaskList.css"

const TaskList = ({ tasks, setTasks }) => {
    const [filteredTasks, setFilteredTasks] = useState(tasks)
    const [filter, setFilter] = useState('all')

    useEffect(() => {
        if (filter === 'all') {
            setFilteredTasks(tasks);
        } else if (filter === 'done') {
            setFilteredTasks(tasks.filter(task => task.completed));
        } else if (filter === 'undone') {
            setFilteredTasks(tasks.filter(task => !task.completed));
        }
    }, [tasks, filter]);

    const handleOnClick = (key) => {
        const updatedTasks = filteredTasks.map((task, index) => {
            if (index === key) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks))
    }

    return (
        <>
            <ul data-cy="task-list" className="task-list">
                {filteredTasks.map((task, key) => (
                    task.completed ?
                        <li data-cy="task-item" className="completed" key={key} onClick={() => {handleOnClick(key)}}>{task.name}</li>
                    :
                        <li data-cy="task-item" key={key} onClick={() => {handleOnClick(key)}}>{task.name}</li>
                ))}
            </ul>
            <div className="buttons">
            <button data-cy="filter-btn-all" onClick={() => setFilter('all')}>Toutes</button>
                <button data-cy="filter-btn-done" onClick={() => setFilter('done')}>Complétées</button>
                <button data-cy="filter-btn-undone" onClick={() => setFilter('undone')}>Non Complétées</button>
            </div>
        </>
    );
}

export default TaskList;
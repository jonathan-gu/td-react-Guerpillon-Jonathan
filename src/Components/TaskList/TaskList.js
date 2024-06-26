import React, { useState, useEffect } from "react";
import "./TaskList.css"

const TaskList = ({ tasks, setTasks, setFilter }) => {
    const handleOnClick = (key) => {
        const updatedTasks = tasks.map((task, index) => {
            if (index === key) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    return (
        <>
            <ul data-cy="task-list" className="task-list">
                {tasks.map((task, key) => (
                    task.completed ?
                        <li data-cy="task-item" className="completed" key={key} onClick={() => {handleOnClick(key)}}>{task.name}</li>
                    :
                        <li data-cy="task-item" key={key} onClick={() => {handleOnClick(key)}}>{task.name}</li>
                ))}
            </ul>
            <div className="buttons">
                <button id="filter-btn-all" data-cy="filter-btn-all" onClick={() => setFilter('all')}>Toutes</button>
                <button id="filter-btn-done" data-cy="filter-btn-done" onClick={() => setFilter('done')}>Complétées</button>
                <button id="filter-btn-undone" data-cy="filter-btn-undone" onClick={() => setFilter('undone')}>Non complétées</button>
            </div>
        </>
    );
}

export default TaskList;
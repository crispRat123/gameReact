// TaskResult.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TaskResult.css';

const TaskResult = () => {
    const task = localStorage.getItem('selectedTask');
    const name = localStorage.getItem('userName');
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/gameReact/game');
    };

    return (
        <div className="task-result">
            <h2>Task for You, {name}!</h2>
            <p>{task}</p>
            <br></br>
            <button onClick={handleGoBack} className="go-back-button">
                Go back
            </button>
        </div>
    );
};

export default TaskResult;

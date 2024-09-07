import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TaskResult.css';
import GoBackButton from './GoBackButton';

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
            <br />
            <GoBackButton />  {/* Add the GoBackButton component */}
        </div>
    );
};

export default TaskResult;

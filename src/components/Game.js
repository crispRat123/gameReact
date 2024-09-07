// Game.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Game.css';
import ReactGA from 'react-ga';

const tasks = [
    "What’s the most beautiful thing anyone’s ever done for you?",
    "You owe me a snack or treat that is your favourite. (that you think I should try)",
    "If you could give a nickname to me , what would it be and why ?",
    "Send me a selfie you’ve taken recently if you’re comfortable. It’s always nice to see different perspectives.",
    "What was your biggest fear as a kid, and are you still scared of it now?",
    "Sidhant owes you your favourite food/snack/treat from your favourite place.",
    "What is one moment in your life you would love to relive?",
    "What gift would you like to have on your birthday ?",
    "What is your favourite memory of us ?",
    "Share a video of you doing your best dance moves."
];
;


const Game = ({ name }) => {
    const [selectedTask, setSelectedTask] = useState(null);
    const navigate = useNavigate();

    const handleTaskSelect = (task, index) => {
        setSelectedTask(task);
        localStorage.setItem('selectedTask', task);

        // Track event with Google Analytics
        ReactGA.event({
            category: 'User Interaction',
            action: 'Task Selected',
            label: `Task ${index + 1}: ${task}`
        });

        navigate('/gameReact/result');
    };

    return (
        <div className="game">
            <h2>{name}Choose a task number!</h2>
            <div className="task-options">
                {tasks.map((task, index) => (
                    <button
                        key={index}
                        className="task-button"
                        onClick={() => handleTaskSelect(task, index)}
                    >
                        {index + 1}
                        {/* Example icon: */}
                        {/* <i className="fas fa-star"></i> */}
                    </button>

                ))}
            </div>
        </div>
    );
};

export default Game;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Game.css';
import GoBackButton from './GoBackButton';

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

const Game = ({ name }) => {
    const [selectedTask, setSelectedTask] = useState(null);
    const navigate = useNavigate();

    const handleTaskSelect = async (task, index) => {
        setSelectedTask(task);
        localStorage.setItem('selectedTask', task);

        try {
            const response = fetch('https://a17bee94-df12-4c33-8fd4-98535c9683d8.mock.pstmn.io/track-click', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    task,
                    taskNumber: index + 1
                }),
            });

            const result = response.json();
            console.log('Response from mock server:', result);
        } catch (error) {
            console.error('Error sending task to mock server:', error);
        }

        navigate('/gameReact/result');
    };

    return (
        <div className="game">
            <h2>{name}, choose a task number!</h2>
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

            <GoBackButton />  {/* Add the GoBackButton component */}
        </div>
    );
};

export default Game;

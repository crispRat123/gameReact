// NameInput.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NameInput.css';

const NameInput = ({ setName }) => {
    const [inputName, setInputName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputName.trim()) {
            localStorage.setItem('userName', inputName);
            setName(inputName);
            navigate('/gameReact/home');
        }
    };

    return (
        <div className="name-input">
            <h2>Welcome! Please enter your name:</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    placeholder="Enter your name"
                    required
                />
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default NameInput;

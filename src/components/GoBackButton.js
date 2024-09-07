// components/GoBackButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/GoBackButton.css'; // Add CSS for styling if needed

const GoBackButton = () => {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)} className="go-back-button">
            Go Back
        </button>
    );
};

export default GoBackButton;

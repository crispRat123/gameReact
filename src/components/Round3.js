import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Round3.css'; // You can create a separate CSS file for styling
import GoBackButton from './GoBackButton';

const Round3 = () => {
    return (
        <div className="round3">
            <h2>💖 Round 3: Deep & Special (3 Points Each)</h2>
            <ol>
                <li>If we could finally meet tomorrow, what’s the first thing we’d do?</li>
                <li>What’s one song that reminds us of us or what song is OUR song?</li>
                <li>If we could send a surprise package to each other, what would be inside?</li>
                <li>What’s one promise I’ve made to you that I’ll never break?</li>
            </ol>
            <h3>Dare: Writing a short love letter and sending it right now! 💌</h3>
            <div className="button-container">
                <Link to="/gameReact/bonusround" className="next-button">Next Round</Link>
                <GoBackButton></GoBackButton>
            </div>
        </div>
    );
};

export default Round3;

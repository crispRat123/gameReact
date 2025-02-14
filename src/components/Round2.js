import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Round2.css'; // You can create a separate CSS file for styling
import GoBackButton from './GoBackButton';

const Round2 = () => {
    return (
        <div className="round2">
            <h2>💖 Round 2: You Mean a Lot to Me (2 Points Each)</h2>
            <ol>
                <li>What’s your favorite text message sent by me?</li>
                <li>If I could plan the perfect virtual date for us, what would it be?</li>
                <li>What’s my favorite nickname for you?</li>
                <li>Carrot cake or cheesecake?</li>
            </ol>
            <h3>Dare: Sending a cute long-distance selfie!</h3>
            <div className="button-container">
            <Link to="/gameReact/round3" className="next-button">Next Round</Link>
                <GoBackButton></GoBackButton>
            </div>
        </div>
    );
};

export default Round2;

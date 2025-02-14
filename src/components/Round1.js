import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Round1.css'; // You can create a separate CSS file for styling
import GoBackButton from './GoBackButton';

const Round1 = () => {
    return (
        <div className="round1">
            <h2>💖 Round 1: Our Love Story (1 Point Each)</h2>
            <ol>
                <li>When did I realize I had feelings for you?</li>
                <li>What’s your favorite memory of us so far?</li>
                <li>What’s our favorite way to stay connected from afar?</li>
            </ol>
            <h3>Dare: Sending each other a cute voice note</h3>
            <div className="button-container">
                <Link to="/gameReact/round2" className="next-button">
                                Next Round
                            </Link>
            <GoBackButton />
            </div>
        </div>
    );
};

export default Round1;

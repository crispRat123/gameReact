import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BonusRound.css'; // You can create a separate CSS file for styling
import GoBackButton from './GoBackButton';

const BonusRound = () => {
    return (
        <div className="bonus-round">
            <h2>💌 Bonus Round: Solve the Question (5 Points)</h2>
            <h3>📜 Final Task: 9x – 7i {'>'} 3 (3x – 7u) 💕</h3>
            <div className="button-container">
                <Link to="/gameReact/end" className="next-button">Submit Answer</Link>
                <GoBackButton />
            </div>
        </div>
    );
};

export default BonusRound;

import React, { useState } from 'react';
import '../styles/ScoreReward.css'; // You can create a separate CSS file for styling
import GoBackButton from './GoBackButton';

const ScoreReward = () => {
    const [showFinisher, setShowFinisher] = useState(false);

    const handleCloseModal = () => {
        setShowFinisher(false);
    };

    return (
        <>
            <div className="score-reward">
                <h2>🎁 Score & Reward System:</h2>
                <ul className="no-bullets">
                    <li>0-5 Points: Aww, you need extra virtual hugs from me!</li>
                    <li>6-10 Points: You’re amazing! You win a long-distance kiss!</li>
                    <li>11-15 Points: That’s hot!</li>
                    <li>16+ Points: Soulmate level! 💖</li>
                </ul>
                <button className="finisher-button" onClick={() => setShowFinisher(true)}>
                    Wanna see how it ends?
                </button>
            </div>

            {showFinisher && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <img src={`${process.env.PUBLIC_URL}/assets/finisher.jpg`} alt="Ending Image" className="ending-image" />
                        <button className="modal-close-button" onClick={handleCloseModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}

            <GoBackButton />
        </>
    );
};

export default ScoreReward;

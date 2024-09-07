// Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = ({ name }) => {
    const [showDisclaimer, setShowDisclaimer] = useState(true);

    const handleCloseModal = () => {
        setShowDisclaimer(false);
    };

    return (
        <div className="home">
            <h2>Welcome, {name}!</h2>
            <p>Are you ready to play the game?</p>
            <Link to="/game" className="start-button">
                Start the Game
            </Link>

            {showDisclaimer && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Disclaimer</h3>
                        <p>
                            The task you choose during the game has to be performed! Choose wisely 😊.
                        </p>
                        <button className="modal-button" onClick={handleCloseModal}>
                            Got it!
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;

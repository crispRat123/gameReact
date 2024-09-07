import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import GoBackButton from './GoBackButton';

const Home = ({ name }) => {
    const [showDisclaimer, setShowDisclaimer] = useState(true);

    const handleCloseModal = () => {
        setShowDisclaimer(false);
    };

    return (
        <div className="home">
            <h2>Welcome, {name}!</h2>
            <p>Are you ready to play the game?</p>
            <Link to="/gameReact/game" className="start-button">
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
            <br></br>
            <GoBackButton />  {/* Add the GoBackButton component */}
        </div>
    );
};

export default Home;

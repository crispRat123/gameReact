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
            <h4>The Ultimate Love Challenge 🌹</h4>
            <ul className="no-bullets">
                <li>🎮 Game Rules:</li>
                <li>Each round has questions and challenges.</li>
                <li>Every correct answer earns points.</li>
                <li>If you miss an answer, don’t worry—you’ll get a cute dare to win my heart again! ❤️</li>
                <li>At the end, you’ll get a chance to win a million dollars, I’ll manifest that! 🎁</li>
            </ul>

            <hr />
            <p>Ready to play? Let’s see how special you are to me—even from miles away!</p>
            <Link to="/gameReact/round1" className="start-button">
                Start the Game
            </Link>

            {showDisclaimer && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Disclaimer</h3>
                        <p>You better get all the answers correct! We ain’t playing games here.</p>
                        <button className="modal-button" onClick={handleCloseModal}>
                            Got it!
                        </button>
                    </div>
                </div>
            )}

            <GoBackButton /> {/* Add the GoBackButton component */}
        </div>
    );
};

export default Home;

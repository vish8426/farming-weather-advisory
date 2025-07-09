import React from 'react';
import './About.css';
import logo from '../assets/logo.png';

const About: React.FC = () => {
    return (
        <div className="about-container">
            <img src={logo} alt="App Logo" className="about-logo" />

            <h1>🌱 Farming Weather Advisory Application</h1>
            <p className="tagline">Smart, Data-Driven Weather Insights for Efficient Farming Decisions.</p>

            <div className="about-card">
                <h2>What This App Does</h2>
                <ul>
                    <li>🌦️ Provides real-time and forecasted weather for your farm location.</li>
                    <li>🧠 Offers crop-specific advisories based on live weather conditions.</li>
                    <li>📈 Visualizes historical weather trends to assist planning.</li>
                    <li>⚙️ Allows you to customize units and theme preferences for your workflow.</li>
                </ul>
            </div>

            <div className="about-card">
                <h2>💻 Technologies Used</h2>
                <p>
                    React, TypeScript, React Router, Recharts, Weather API, and Modern CSS for a Responsive, Clean User Experience.
                </p>
            </div>

            <div className="about-card">
                <h2>Developer</h2>
                <p>
                    Built and maintained by <a href="https://github.com/vish8426" target="_blank" rel="noopener noreferrer">Vish</a>.
                    This project is a demonstration of full-stack and UI engineering in practical agriculture applications.
                </p>
            </div>

            <p className="footer-note">
                Have feedback or feature requests? Reach out via <a href="https://github.com/vish8426" target="_blank" rel="noopener noreferrer">GitHub</a> to help improve this tool for farmers and students.
            </p>
        </div>
    );
};

export default About;
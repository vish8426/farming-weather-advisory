import React  from "react";
import './Dashboard.css';
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
    };

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>🌾 Welcome Back, User!</h1>
            </header>

            <section className="weather-card">
                <h2>☀️ Weather Summary</h2>
                <p><strong>Temperature:</strong> 28°C</p>
                <p><strong>Condition:</strong> Sunny</p>
                <p><strong>Humidity:</strong> 40%</p>
            </section>

            <section className="advisory-card">
                <h2>🧠 Farming Advisory</h2>
                <ul>
                    <li>Good Time to Irrigate Leafy Crops.</li>
                    <li>Avoid Planting Tomorrow (High Winds).</li>
                </ul>
            </section>

            <footer className="dashboard-footer">
                <button onClick={handleLogout}>Logout</button>
            </footer>
        </div>
    );
};

export default Dashboard;   
import React, { useEffect, useState }  from "react";
import './Dashboard.css';
import { useNavigate } from "react-router-dom";
import { getCurrentWeather } from "../services/weather";

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const [weather, setWeather] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const data = await getCurrentWeather('Gatton, Queensland, Australia');
                setWeather(data);
            }
            catch (err) {
                setError('Failed to Fetch Weather');
            }
            finally
            {
                setLoading(false);
            }
        };

        fetchWeather();

    }, []);

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
    };

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>🌾 Welcome Back!</h1>
            </header>

            <section className="weather-card">
                <h2>☀️ Weather Summary</h2>
                {loading && <p>Loading Weather...</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {weather && (
                    <>
                        <p><strong>Temperature:</strong> {weather.current.temp_c}°C</p>
                        <p><strong>Condition:</strong> {weather.current.condition.text}</p>
                        <p><strong>Humidity:</strong> {weather.current.humidity}%</p>
                    </>
                )}
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
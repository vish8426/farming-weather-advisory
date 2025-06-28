import React, { useEffect, useState }  from "react";
import './Dashboard.css';
import { useNavigate } from "react-router-dom";
import { getCurrentWeather } from "../services/weather";
import { fetchSevenDayForecast } from "../services/weather"
import { getAdvisories } from "../utils/advisoryEngine";

interface ForecastDay {
    date: string;
    day: {
        avgtemp_c: number;
        maxtemp_c: number;
        mintemp_c: number;
        condition: { text: string; icon: string };
    };
}

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const [weather, setWeather] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [forecast, setForecast] = useState<ForecastDay[]>([]);

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

    useEffect(() => {
        const fetchForecast = async () => {
            try {
                const forecastData = await fetchSevenDayForecast('Gatton, Queensland, Australia');
                setForecast(forecastData);
            }
            catch (error) {
                console.error(error);
            }
        };

        fetchForecast();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
    };

const advisories = weather
    ? getAdvisories({
        temp_c: weather.current.temp_c,
        humidity: weather.current.humidity,
        wind_kph: weather.current.wind_kph,
         condition: weather.current.condition.text,
    })
    : [];

const toTitleCase = (str: string) => {
    return str.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
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
                        <p><strong>Condition:</strong> {toTitleCase(weather.current.condition.text)}</p>
                        <p><strong>Humidity:</strong> {weather.current.humidity}%</p>
                    </>
                )}
            </section>

            <section className="advisory-card">
                <h2>🧠 Farming Advisory</h2>
                <ul>
                    {advisories.map((adv, idx) => (
                    <li key={idx}>{adv}</li>
                    ))}
                </ul>
            </section>

            <div className="forecast-card">
                <h2>📅 7-Day Forecast</h2>

                <div className="forecast-grid">
                    {forecast.map((day, index) => (
                        <div key={index} className="forecast-day">
                            <p>{new Date(day.date).toLocaleDateString('en-AU', { weekday: 'short' })}</p>
                            <img src={`https:${day.day.condition.icon}`} alt={day.day.condition.text} />
                            <p>{day.day.avgtemp_c}°C</p>
                            <p>{toTitleCase(day.day.condition.text)}</p>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="dashboard-footer">
                <button onClick={handleLogout}>Logout</button>
            </footer>
        </div>
    );
};

export default Dashboard;   
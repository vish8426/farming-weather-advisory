import React, { useEffect, useState } from 'react';
import { getCurrentWeather } from '../services/weather';
import './Advisory.css';

const Advisory: React.FC = () => {
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
                console.error(err);
                setError('Failed to Fetch Weather Data.');
            } 
            finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

     const generateWheatAdvisories = () => {
        if (!weather) return [];

        const advisories: string[] = [];

        // Temperature Advisory
        const temp = weather.current.temp_c;
        if (temp < 10) {
            advisories.push(`🌡️ Today's ${temp}°C is Below Optimal; Consider Frost Protection.`);
        } 
        else if (temp > 30) {
            advisories.push(`🌡️ Today's ${temp}°C is High; Ensure Irrigation and Monitor for Heat Stress.`);
        } 
        else {
            advisories.push(`🌡️ Temperature (${temp}°C) is within the Optimal Range for Wheat.`);
        }

        // Humidity Advisory
        const humidity = weather.current.humidity;
        if (humidity > 85) {
            advisories.push(`💧 High Humidity (${humidity}%) Detected; Monitor for Fungal Diseases.`);
        }

        // Wind advisory
        const wind = weather.current.wind_kph;
        if (wind > 30) {
            advisories.push(`💨 Strong Winds (${wind} kph) expected; Secure Equipment and Young Plants.`);
        }

        // Rain Advisory
        const condition = weather.current.condition.text;
        if (condition.toLowerCase().includes('rain')) {
            advisories.push(`🌧️ Rain Expected; Monitor Soil Moisture and Plan Fieldwork.`);
        }

        // General Reminder
        advisories.push(`✅ Regularly Inspect your Wheat Fields for Pest and Disease Signs during current Conditions.`);

        return advisories;
    };

    const advisories = generateWheatAdvisories();

    return (
        <div className="advisory-container">
            <h2>🌾 Farming Advisory</h2>

            {loading && <p>Loading weather data...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {weather && (
                <>
                    {/* Weather Summary Card */}
                    <div className="advisory-card">
                        <h3>☀️ Today's Weather Summary</h3>
                        <p><strong>Temperature:</strong> {weather.current.temp_c}°C</p>
                        <p><strong>Condition:</strong> {weather.current.condition.text.replace(/\b\w/g, (l: string) => l.toUpperCase())}</p>
                        <p><strong>Humidity:</strong> {weather.current.humidity}%</p>
                        <p><strong>Wind Speed:</strong> {weather.current.wind_kph} kph</p>
                    </div>

                    {/* Wheat Advisory Card */}
                    <div className="advisory-card">
                        <h3>📝 Wheat Crop Advisory</h3>
                        <ul>
                            {advisories.map((adv, idx) => (
                                <li key={idx}>{adv}</li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
};

export default Advisory;
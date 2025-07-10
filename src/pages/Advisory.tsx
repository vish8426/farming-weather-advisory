import React, { useEffect, useState } from 'react';
import { getCurrentWeather } from '../services/weather';
import './Advisory.css';

const Advisory: React.FC = () => {
    const [weather, setWeather] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const advisories: string[] = [];
    const temp = weather.current.temp_c;
    const humidity = weather.current.humidity;
    const wind = weather.current.wind_kph;
    const condition = weather.current.condition.text;

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

        // Temperature Advisory
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
        if (humidity > 85) {
            advisories.push(`💧 High Humidity (${humidity}%) Detected; Monitor for Fungal Diseases.`);
        }

        // Wind advisory
        if (wind > 30) {
            advisories.push(`💨 Strong Winds (${wind} kph) expected; Secure Equipment and Young Plants.`);
        }

        // Rain Advisory
        if (condition.toLowerCase().includes('rain')) {
            advisories.push(`🌧️ Rain Expected; Monitor Soil Moisture and Plan Fieldwork.`);
        }

        // General Reminder
        advisories.push(`✅ Regularly Inspect your Wheat Fields for Pest and Disease Signs during current Conditions.`);

        return advisories;
    };

    const generateGrapeAdvisory = () => {
        if (!weather) return [];
        const advisories: string[] = [];

        // Temperature Advisory
        if (weather.current.temp_c < 15) {
            advisories.push("🧊 Low Temperatures may affect Grape Flowering and Fruit Set.");
        }

        // Humidity Advisory
        if (weather.current.humidity > 85) {
            advisories.push("🌡️ High Humidity may Increase Fungal Disease Risk; consider Preventive Fungicide Spray.");
        }
        
        // Rain Advisory
        if (weather.current.condition.text.toLowerCase().includes('rain')) {
            advisories.push("🌧️ Rain Expected; Monitor for Downy Mildew and Reduce Irrigation Scheduling.");
        } 
        else {
            advisories.push("✅ Weather is Favorable for Grape Canopy Management.");
        }

        return advisories;
    };

    const generateOilseedsAdvisory = () => {
        if (!weather) return [];
        const advisories: string[] = [];

        // Temperature Advisory
        if (temp < 12) {
            advisories.push("🧊 Low Temperatures may affect Oilseed Germination and Growth Rates.");
        }
        else if (temp > 32) {
            advisories.push("🌡️ High Temperatures may cause Moisture Stress; Ensure Adequate Irrigation.");
        }
        else {
            advisories.push(`🌡️ Temperature (${temp}°C) is Suitable for Oilseed Growth.`);
        }

        // Humidity Advisory
        if (humidity > 85) {
            advisories.push("💧 High Humidity may Increase Blackleg and Sclerotinia Risk in Oilseeds.");
        }

        // Wind Advisory
        if (wind > 30) {
            advisories.push(`💨 Strong Winds (${wind} kph) may Cause Lodging; Monitor Crop Stands.`);
        }

        // Rain Advisory
        if (condition.includes('rain')) {
            advisories.push("🌧️ Rain Expected; Monitor Waterlogging in Low-Lying Areas.");
        }

        // General Reminder
        advisories.push("✅ Regularly Scout Oilseed Fields for Pest Infestations and Nutrient Deficiencies.");

        return advisories;
    };

    return (
        <div className="advisory-container">
            <h1>📊 Farming Advisory</h1>

            {loading && <p>Loading weather data...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {weather && (
                <>
                    {/* Weather Summary Card */}
                    <div className="advisory-card">
                        <h2>☀️ Today's Weather Summary</h2>
                        <p><strong>Location:</strong> Gatton, QLD</p>
                        <p><strong>Temperature:</strong> {weather.current.temp_c}°C</p>
                        <p><strong>Condition:</strong> {weather.current.condition.text.replace(/\b\w/g, (l: string) => l.toUpperCase())}</p>
                        <p><strong>Humidity:</strong> {weather.current.humidity}%</p>
                        <p><strong>Wind Speed:</strong> {weather.current.wind_kph} kph</p>
                    </div>

                    {/* Wheat Advisory Card */}
                    <div className="advisory-card">
                        <h2>📝 Wheat Crop Advisory</h2>
                        <ul>
                            {generateWheatAdvisories().map((adv, idx) => (
                                <li key={idx}>{adv}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="advisory-card">
                        <h2>🍇 Grape Farming Advisory</h2>
                        <ul>
                            {generateGrapeAdvisory().map((adv, idx) => (
                                <li key={idx}>{adv}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="advisory-card">
                        <h2>🌱 Oilseeds Advisory</h2>
                        <ul>
                            {generateOilseedsAdvisory().map((adv, idx) => (
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
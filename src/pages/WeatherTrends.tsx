import React, { useEffect, useState } from 'react';
import { 
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
    BarChart, Bar, ResponsiveContainer 
} from 'recharts';
import { fetchHistoricalWeather } from '../services/weather';
import './WeatherTrends.css';

const WeatherTrends: React.FC = () => {
    const [historicalData, setHistoricalData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchHistoricalWeather('Gatton, Queensland, Australia', 7);

                // For Debugging
                console.log('Historical Data:', data);
                setHistoricalData(data);
            } 
            catch (error) {
                console.error(error);
            } 
            finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading Historical Data...</p>;

    return (
        <div className='trends-container'>
            <h2>📈 Historical Weather Trends (7 Days)</h2>

            {/* Average Temperature Line Chart */}
            <div className="trends-card">
                <h3>🌡️ Average Temperature</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={historicalData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" tick={{ fontSize: 14 }} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="avgtemp_c" stroke='#5b7553' name="Avg Temp (°C)" />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Precipitation Bar Chart */}
            <div className="trends-card">
                <h3>🌧️ Precipitation</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={historicalData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" tick={{ fontSize: 14 }} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="totalprecip_mm" fill="#a0c49d" name="Precipitation (mm)" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Average Humidity Bar Chart */}
            <div className="trends-card">
                <h3>💧 Average Humidity</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={historicalData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" tick={{ fontSize: 14 }} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="avghumidity" fill="#395144" name="Avg Humidity (%)" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default WeatherTrends;
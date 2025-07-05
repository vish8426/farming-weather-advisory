import React, { useState, useEffect } from 'react';
import './Settings.css';

const Settings: React.FC = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [unit, setUnit] = useState(localStorage.getItem('unit') || 'metric');

    const handleThemeChange = (mode: string) => {
        setTheme(mode);
        localStorage.setItem('theme', mode);
    };

    const handleUnitsChange = (mode: string) => {
        setUnit(mode);
        localStorage.setItem('unit', mode);
    };

    useEffect(() => {
        document.body.className = theme; 
    }, [theme]);

    return (
        <div className="settings-container">
            <h2>⚙️ Settings</h2>

            <div className="settings-card">
                <h3>Theme Selection</h3>
                <button onClick={() => handleThemeChange('light')}>Light Mode</button>
                <button onClick={() => handleThemeChange('dark')}>Dark Mode</button>
            </div>

            <div className="settings-card">
                <h3>Units Selection</h3>
                <button onClick={() => handleUnitsChange('metric')}>Metric (°C)</button>
                <button onClick={() => handleUnitsChange('imperial')}>Imperial (°F)</button>
            </div>
        </div>
    );
};

export default Settings;

import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <h2>🌱 Farming Advisory</h2>
            <nav>
                <ul>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/advisory">Advisory</Link></li>
                    <li><Link to="/trends">Weather Trends</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
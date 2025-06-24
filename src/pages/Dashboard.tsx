import React  from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
    };

    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1>Welcome to the Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;   
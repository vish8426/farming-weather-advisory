import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
import logo from '../assets/logo.png';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        // Redirect if already logged in
        const loggedIn = localStorage.getItem('isLoggedIn');
        
        if(loggedIn === 'true') {
            navigate('/dashboard');
        }

        // Simulate user registration on first load
        if (!localStorage.getItem('user')) {
            const defaultUser = {email: 'test@test.com', password: '123456'};
            localStorage.setItem('user', JSON.stringify(defaultUser));
        }
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    
        if (email === storedUser.email && password === storedUser.password) {
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/dashboard');
        }
        else {
            setError('Invalid Email or Password');
        }

        // // In a real app you send this to your backend authentication provider
        // console.log('Login Attempt:', { email, password });
        // alert('Login Logic not Implmented Yet');
    };

    return (
        <div className="login-page">
            <div className='login-header'>
                <h1>🌱 Farming Weather Advisory Application</h1>
            </div>

            <div className='login-container'>
                <h2>Login</h2>

                <img src={logo} alt="App Logo" className="login-logo" />

                <form onSubmit={handleLogin} className='login-form'>
                    <label>Email</label>
                    <input
                        type='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />

                    <label>Password</label>
                    <input
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />

                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <button type='submit'>Login</button>
                </form>

                <footer className='login-footer'>
                    <p>Powered by 🌌<a href="https://github.com/vish8426" target="_blank" rel="noopener noreferrer">Vish</a></p>
                </footer>
            </div>
        </div>
    );
};

export default Login;
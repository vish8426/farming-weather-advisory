import React, { useState } from 'react';
import './Login.css'; 

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // In a real app you send this to your backend authentication provider
        console.log('Login Attempt:', { email, password });
        alert('Login Logic not Implmented Yet');
    };

    return (
        <div className="login-container">
            <h2>Logic</h2>
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

                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;
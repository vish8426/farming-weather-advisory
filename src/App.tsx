import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Advisory from './pages/Advisory';
import WeatherTrends from './pages/WeatherTrends';
import About from './pages/About';
import Layout from './components/Layout';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />

                {/* Wrap protected Routes with Layout */}
                <Route
                    path="/dashboard"
                    element={
                        <Layout>
                            <Dashboard />
                        </Layout>
                    }
                />
                <Route
                    path="/settings"
                    element={
                        <Layout>
                            <Settings />
                        </Layout>
                    }
                />
                <Route
                    path="/advisory"
                    element={
                        <Layout>
                            <Advisory />
                        </Layout>
                    }
                />
                <Route
                    path="/trends"
                    element={
                        <Layout>
                            <WeatherTrends />
                        </Layout>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <Layout>
                            <About />
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
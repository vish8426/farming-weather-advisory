import axios from 'axios';

// Replace with Key
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; 
const BASE_URL = 'https://api.weatherapi.com/v1';

export const getCurrentWeather = async (location: string) => {
    const response = await axios.get(`${BASE_URL}/current.json`, {
        params: {
            key: API_KEY,
            q: location,
        },
    });

    return response.data;
};
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

export const fetchSevenDayForecast = async (location: string) => {
    const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json`, {
        params: {
            key: API_KEY,
            q: location,
            days: 7
        },
    });

    // Returns an Array of 7 Days
    return response.data.forecast.forecastday; 
};

export const fetchHistoricalWeather = async (location: string, days: number) => {
    const today = new Date();
    const data = [];

    for (let i=0; i<days; i++) {
        const date = new Date(today);

        date.setDate(today.getDate() - i);
        
        const formattedDate = date.toISOString().split('T')[0];

        try {
            const response = await axios.get('https://api.weatherapi.com/v1/history.json', {
                params: {
                    key: API_KEY,
                    q: location,
                    dt: formattedDate,
                },
            });

            const dayData = response.data.forecast.forecastday[0].day;

            data.push({
                date: formattedDate,
                avgtemp_c: dayData.avgtemp_c,
                totalprecip_mm: dayData.totalprecip_mm,
                avghumidity: dayData.avghumidity,
            });
        } 
        catch (error) {
            console.error(`Failed to Fetch Data for ${formattedDate}:`, error);
        }
    }

    // Oldest First
    return data.reverse();
};
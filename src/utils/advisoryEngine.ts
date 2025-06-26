interface WeatherInputs {
    temp_c: number;
    humidity: number;
    wind_kph: number;
    condition: string;
}

export const getAdvisories = (weather: WeatherInputs): string[] => {
    const advisories: string[] = [];

    if (weather.temp_c > 32) {
        advisories.push("⚠️ High Temperature – Consider Early Morning Irrigation.");
    }
    if (weather.humidity < 40) {
        advisories.push("💧 Low Humidity – Crops Require Additional Watering.");
    }
    if (weather.wind_kph > 25) {
        advisories.push("💨 Strong Winds – Avoid Spraying or Planting Today.");
    }
    if (/rain/i.test(weather.condition)) {
        advisories.push("🌧️ Rain Expected – Hold off on Irrigation.");
    }
    if (advisories.length === 0) {
        advisories.push("✅ Conditions Favourable for General Farm Activities.");
    }

    return advisories;
};
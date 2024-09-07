import WeatherAPI from "./WeatherApi.js";

class WeatherAdapter {
    constructor() {
        this.newAPI = new WeatherAPI();
    }

    getWeather(city) {
        // Fetch weather data from the API
        const weatherData = this.newAPI.fetchWeather(city);

        // Convert the data into the format expected by the user
        return {
            city: weatherData.location,
            temperature: `${(weatherData.temp - 32)*5/9}°C`,
            description: weatherData.conditions
        };
    }
}

export default WeatherAdapter;

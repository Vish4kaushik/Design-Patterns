import WeatherAdapter from './weatherAdapter.js';

// Data in the required format by using adapter method
const weatherService = new WeatherAdapter();

const weather = weatherService.getWeather('New York');
console.log(weather); 
// Output: { city: 'New York', temperature: '22°C', description: 'Partly Cloudy' }

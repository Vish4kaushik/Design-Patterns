class WeatherAPI {

    constructor(){
        this.cityData = [
            {
                location : 'New York',
                temp: 71.6, //temperature in fahrenheit
                conditions: 'Partly Cloudy'
            },
            {
                location: 'Torronto',
                temp: 65, 
                conditions: 'Partly Cloudy'
            },
            {
                location: 'New Delhi',
                temp: 78.5, 
                conditions: 'Partly Cloudy'
            }
        ]
    }

    fetchWeather(city) {
        
        return this.cityData.filter((item) => item.location === city)[0]; // filter method is an example of iterator pattern
    }
}

export default WeatherAPI;

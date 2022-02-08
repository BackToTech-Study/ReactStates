import React from 'react';
import useWeatherService from '../../services/WeatherService';

const Weather = () => {  
    const cityName = "Sibiu"

    const { weatherData, error } = useWeatherService(cityName)

    if (error) return (
        <div className="container">
            <div className="applicationContent">
                Failed to load weather in {cityName}. Error: {error}
            </div>
        </div>
    );

    return (
        <div className="container">
            <div className="applicationContent">
                Actual data: <span>{weatherData}</span>
            </div>
        </div>
    );
}

export default Weather;
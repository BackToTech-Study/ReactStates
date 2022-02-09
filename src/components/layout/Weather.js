import React from 'react';
import useWeatherService from '../../services/WeatherService';

const Weather = () => {  
    const cityName = "Sibiu"

    const { forecast, isValidating,  error } = useWeatherService(cityName)

    if (isValidating) return (
        <div className="container">
            <div className="applicationContent">
                Loading weather in {cityName} ...
            </div>
        </div>
    );

    if (error) return (
        <div className="container">
            <div className="applicationContent">
                Failed to load weather in {cityName}. {error}.
            </div>
        </div>
    );

    return (
        <div className="container">
            <div className="applicationContent">
                <span>{forecast.city}</span> - <span>{forecast.condition}</span>
            </div>
        </div>
    );
}

export default Weather;
import useSWR from 'swr'
import Forecast from '../models/Forecast';
import SimulatedWeatherResponse from './DummyData'

const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

function handleResponse(response) {
    if(response.ok) 
        return response.json()

    throw `Error ${response.status}: ${response.statusText}`
}

// const weatherFetcher = (city) => 
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=888`, requestOptions)
//     .then(handleResponse)
    
const weatherFetcher = (city) => 
    new Promise(r => setTimeout(r, 2000))
    .then(() => { return { ...SimulatedWeatherResponse, 'name': city } });

function useWeatherService(city) {
    const { data, error, isValidating } = useSWR(city, weatherFetcher)

    return {
        forecast: new Forecast(data),
        isValidating,
        error: error
    }
}

export default useWeatherService;
import Forecast from '../models/Forecast';

const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

function handleResponse(response) {
    if(response.ok) 
        return new Forecast(response.json())

    throw `Error ${response.status}: ${response.statusText}`
}

const weatherFetcher = (city) => 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=888`, requestOptions)
    .then(handleResponse)

export default weatherFetcher;    
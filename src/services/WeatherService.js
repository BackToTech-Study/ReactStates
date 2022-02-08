import useSWR from 'swr'

const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

const weatherFetcher = (city) => 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9c2e419efe15c4888ef4e57d1e2ed1bb`, requestOptions)
    .then(res => res.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

function useWeatherService(city) {
    const { data, error } = useSWR(city, weatherFetcher)

    return {
        weather: data,
        error: error
    }
}

export default useWeatherService;
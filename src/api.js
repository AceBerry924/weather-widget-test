import axios from "axios";

const API_KEY = "2403ebb7ad43608921d94537a8f3f5b8";

export default {
  fetchCurrentWeather: ({ query }) =>
    axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${API_KEY}`
    ),
  fetchWeekForecast: ({ query }) =>
    axios.get(
      `https://api.openweathermap.org/data/2.5/daily?q=${query}&units=metric&appid=${API_KEY}&cnt=6`
    ),
  fetchWeatherForecast: ({ lat, lon }) =>
    axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,current&appid=${API_KEY}`
    ),
};

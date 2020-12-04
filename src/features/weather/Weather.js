import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectWeather, fetchCurrentWeather } from "./weatherSlice";

import WeatherContainer from "./Weather.style";

const ImageBaseUrl = "http://openweathermap.org/img/wn/";

const WeatherInfo = ({ weather }) => (
  <div className="weather-info">
    <p className="xl">{weather.name}</p>
    <div className="weather-info__today">
      <div className="weather-info__icon">
        <img src={`${ImageBaseUrl}${weather.weather[0].icon}@2x.png`} alt="weather-icon" />
        <p className="xl">{weather.weather[0].description}</p>
      </div>

      <h4>{`${weather.main.temp} °C`}</h4>

      <div className="weather-info__extra">
        <p>Wind: {`${weather.wind.speed} m/s`}</p>
        <p>Sunrise: {`${weather.sys.sunrise}`}</p>
        <p>Sunset: {`${weather.sys.sunset}`}</p>
      </div>
    </div>
  </div>
);
const Weather = () => {
  const dispatch = useDispatch();
  const weather = useSelector(selectWeather);
  const [city, setCity] = useState("");
  const [subscribe, setSubscribe] = useState(false);

  console.log(weather);

  const searchWeather = () => {
    setSubscribe(true);

    if (!city) return;
    dispatch(fetchCurrentWeather({ query: city }));
  };

  return (
    <WeatherContainer>
      <h2>Open Weather</h2>
      <div className="search-box">
        <input placeholder="Enter City" type="text" onChange={(e) => setCity(e.target.value)} />
        <button onClick={() => searchWeather()}>Search</button>
      </div>

      <div className="result-box">
        {subscribe &&
          (city ? (
            weather && <WeatherInfo weather={weather} />
          ) : (
            <p className="xl">City Not Found</p>
          ))}
      </div>
    </WeatherContainer>
  );
};

export default Weather;

import React, { useState } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import SkeletonLoader from "tiny-skeleton-loader-react";
import { selectWeather, fetchCurrentWeather, fetchWeekForecast } from "./weatherSlice";

import WeatherContainer from "./Weather.style";

const ImageBaseUrl = "http://openweathermap.org/img/wn/";

const TodayInfo = ({ today, city }) => (
  <div className="weather-info__today">
    <div className="weather-info__icon">
      <img src={`${ImageBaseUrl}${today.weather[0].icon}@2x.png`} alt="weather-icon" />
      <p className="xl">{today.weather[0].description}</p>
    </div>

    <h4>{`${Math.round(today.main.temp)} °C`}</h4>

    <div className="weather-info__extra">
      <p>Wind: {`${today.wind.speed.toFixed(1)} m/s`}</p>
      <p>Sunrise: {`${city.sunrise}`}</p>
      <p>Sunset: {`${city.sunset}`}</p>
    </div>
  </div>
);

const Forecast5days = ({ dailyForecast }) => (
  <div className="daily-weather">
    {dailyForecast.map((weather, id) => (
      <div className="daily-weather__item" key={id}>
        <img src={`${ImageBaseUrl}${weather.weather[0].icon}@2x.png`} alt="weather-icon" />
        <p className="xl">{`${Math.round(weather.main.temp)} °C`}</p>
      </div>
    ))}
  </div>
);
const WeatherPanel = ({ forecast }) => {
  const daily = forecast.list.filter((el, id) => {
    let hour = parseInt(moment(el.dt_txt).format("HH"));
    console.log(hour);

    if ((hour >= 9 && hour < 12) || id === 0) return true;
    return false;
  });
  console.log(daily);

  return (
    <div className="weather-info">
      <p className="xl">{forecast.city.name}</p>
      <TodayInfo today={daily[0]} city={forecast.city} />
      <p className="xl weather-info__forecast">5 days Forecast</p>
      <Forecast5days dailyForecast={daily} />
    </div>
  );
};

const Weather = () => {
  const dispatch = useDispatch();
  const weatherForecast = useSelector(selectWeather);
  const [city, setCity] = useState("");

  console.log(weatherForecast);

  const searchWeather = () => {
    if (!city) return;
    dispatch(fetchWeekForecast({ query: city }));
  };

  return (
    <WeatherContainer>
      <h3>Open Weather</h3>
      <div className="search-box">
        <input placeholder="Enter City" type="text" onChange={(e) => setCity(e.target.value)} />
        <button onClick={() => searchWeather()}>Search</button>
      </div>

      <div className="result-box">
        {weatherForecast ? (
          <WeatherPanel forecast={weatherForecast} />
        ) : (
          <SkeletonLoader circle width="1em" style={{ margin: "auto" }} />
          // <p className="xl">City Not Found</p>
        )}
      </div>
    </WeatherContainer>
  );
};

export default Weather;

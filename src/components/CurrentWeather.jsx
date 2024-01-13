import React from "react";

const CurrentWeather = ({ weather, units }) => {
  return (
    <div className="weather-card">
      <h2>Current Weather</h2>
      <div className="weather-info">
        <p>
          Temperature: {Math.round(weather.main.temp / 10)}°
          {units === "metric" ? "C" : "F"}
        </p>
        <p>
          Min/Max: {Math.round(weather.main.temp_min / 10)}°/
          {Math.round(weather.main.temp_max / 10)}°
        </p>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>
          Wind: {weather.wind.speed} m/s, {weather.wind.deg}°
        </p>
        <p>Description: {weather.weather[0].description}</p>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt="Weather Icon"
          className="weather-icon"
        />
      </div>
    </div>
  );
};

export default CurrentWeather;

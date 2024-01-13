import React from "react";

const Forecast = ({ forecast, units }) => {
  return (
    <div>
      <h2>5-Day Forecast</h2>
      <div className="weather-info">
        {forecast.list.map((item) => (
          <div key={item.dt} className="forecast-card">
            <p>Date: {new Date(item.dt * 1000).toLocaleDateString()}</p>
            <p>Time: {new Date(item.dt * 1000).toLocaleTimeString()}</p>

            <p>
              Avg. Temperature: {Math.round(item.main.temp / 10)}°
              {units === "metric" ? "C" : "F"}
            </p>
            <p>Forecast: {item.weather[0].description}</p>
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt="Weather Icon"
              className="weather-icon"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;

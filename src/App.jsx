import { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";

import { getWeatherData, getForecastData } from "./components/api";
import "./App.css";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [units, setUnits] = useState("metric"); // Default to Celsius
  const [error, setError] = useState("");
  const getWeather = async (city) => {
    try {
      const weatherData = await getWeatherData(city);

      // Check if there is an error in the response
      if (weatherData.error) {
        setError(weatherData.error);
        console.log(error);
      } else {
        const forecastData = await getForecastData(city);
        setWeather(weatherData);
        setForecast(forecastData);
        setError("");
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  return (
    <div className="container">
      <WeatherForm getWeather={getWeather} loaded={weather} />
      {setError && <h5>{error}</h5>}
      {weather && <CurrentWeather weather={weather} units={units} />}
      {forecast && <Forecast forecast={forecast} units={units} />}
      {/* <ToggleUnits units={units} setUnits={setUnits} /> */}
    </div>
  );
};

export default App;

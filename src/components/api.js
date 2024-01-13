import axios from "axios";

const API_KEY = "f1f444c3f8874e44663e5bb869004448";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);

    return { error: "Failed to fetch weather data. Please try again later." };
  }
};

export const getForecastData = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// import React, { useState } from "react";

// const WeatherForm = ({ getWeather, loaded }) => {
//   const [city, setCity] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     getWeather(city);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Enter city"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       />
//       <button type="submit">Get Weather</button>
//     </form>
//   );
// };

// export default WeatherForm;
import React, { useState } from "react";

const WeatherForm = ({ getWeather }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset the previous error message
    setError(null);

    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }

    try {
      await getWeather(city);
    } catch (error) {
      // Handle other types of errors (e.g., network issues)
      console.error("An unexpected error occurred:", error);
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>

      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default WeatherForm;

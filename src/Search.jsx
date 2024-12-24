import React, { useState } from "react";
import axios from "axios";

export default function Search({ updateWeather }) {
  let [cityInput, setCityInput] = useState("");

  let searchWeather = async (event) => {
    event.preventDefault();
    let apiKey = "f063aad8tb9d2a804775off7e6bf14bb";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityInput}&key=${apiKey}`;

    let response = await axios.get(apiUrl);
    let weather = response.data;

    updateWeather({
      city: cityInput,
      temperature: weather.temperature.current,
      description: weather.condition.description,
      humidity: weather.temperature.humidity,
      wind: weather.wind.speed,
      icon: weather.condition.icon_url,
    });
  };

  return (
    <div>
      <form onSubmit={searchWeather}>
        <input
          type="text"
          placeholder="Enter city"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

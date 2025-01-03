import React, { useState } from "react";
import axios from "axios";

export default function Search({ updateWeather }) {
  let [cityInput, setCityInput] = useState("");

  let searchWeather = async (event) => {
    event.preventDefault();
    let apiKey = "1d038ee28ef2727a9f0310860ac10ae9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;

    let response = await axios.get(apiUrl);

    updateWeather({
      city: cityInput,
      temperature: Math.round(response.data.main.temp - 273.15),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  };

  return (
    <div className="Weather">
      <form onSubmit={searchWeather}>
        <div className="row">
          <div className="col-5">
            <input
              type="text"
              placeholder="Enter city"
              value={cityInput}
              autoFocus="on"
              onChange={(e) => setCityInput(e.target.value)}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";

export default function Search({ updateWeather }) {
  let [cityInput, setCityInput] = useState("");

  let searchWeather = async (event) => {
    event.preventDefault();
    let apiKey = "1d038ee28ef2727a9f0310860ac10ae9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;

    let response = await axios.get(apiUrl);

    updateWeather({
      ready: true,
      coordinates: response.data.coordinates,
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
          <div className="col-8">
            <input
              className="searchInput w-100"
              type="text"
              placeholder="Enter city"
              value={cityInput}
              autoFocus="on"
              onChange={(e) => setCityInput(e.target.value)}
            />
          </div>
          <div className="Button col-3">
            <input type="submit" value="Search" className="btn  w-100" />
          </div>
        </div>
      </form>

      <Forecast coordinates={updateWeather.coordinates} />
    </div>
  );
}

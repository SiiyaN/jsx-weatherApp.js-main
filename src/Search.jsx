import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";

export default function Search({ updateWeather }) {
  let [cityInput, setCityInput] = useState("");

  let searchWeather = async (event) => {
    event.preventDefault();
    let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityInput}&key=${apiKey}`;

    let response = await axios.get(apiUrl);

    updateWeather({
      ready: true,
      coordinates: response.data.coordinates,
      city: cityInput,
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
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
    </div>
  );
}

import React, { useState } from "react";
import Search from "./Search";

export default function App() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState("");

  const updateWeatherData = (data) => {
    setCity(data.city);
    setTemperature(Math.round(data.temperature));
    setDescription(data.description);
    setHumidity(data.humidity);
    setWind(data.wind);
    setIcon(data.icon);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <Search updateWeather={updateWeatherData} />
      {temperature && (
        <div>
          <h2>Weather Details</h2>
          <ul>
            <li>Temperature: {temperature}°C</li>
            <li>Humidity: {humidity}%</li>
            <li>Wind: {wind} km/h</li>
            <li>
              Description: {description}
              <br />
              {icon && <img src={icon} alt={description} />}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

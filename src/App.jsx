import React, { useState } from "react";
import Search from "./Search";
import Footer from "./Footer";
import "./styles.css";

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
    <div className="App">
      <div className="container">
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
                <div>
                  <img
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt={description}
                  />
                </div>
              </li>
            </ul>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}

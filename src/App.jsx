import React, { useState } from "react";
import Search from "./Search";
import Footer from "./Footer";
import Temperature from "./Temperature";
import FormattedDate from "./Date";
import Forecast from "./Forecast";
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
        <h1></h1>
        <Search updateWeather={updateWeatherData} />
        {temperature && (
          <div>
            <h2>{city}</h2>
            <ul>
              <li>
                <FormattedDate date={new Date()} />
              </li>

              <li>Humidity: {humidity}%</li>
              <li>Wind: {wind} km/h</li>
              <li>
                Description: {description}
                <div className="row mt-4">
                  <div className="col-6">
                    <div className="d-flex">
                      <div>
                        <Temperature celsius={temperature} />
                      </div>
                      <div>
                        <img
                          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                          alt={description}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Forecast />
              </li>
            </ul>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}

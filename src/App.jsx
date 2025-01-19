import React, { useState } from "react";
import Search from "./Search";
import Footer from "./Footer";
import Temperature from "./Temperature";
import FormattedDate from "./Date";
import Forecast from "./Forecast";
import Icons from "./Icons";
import "./styles.css";

export default function App() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState("");
  const [coordinates, setCoordinates] = useState(null);

  const updateWeatherData = (data) => {
    setCity(data.city);
    setTemperature(Math.round(data.temperature));
    setDescription(data.description);
    setHumidity(data.humidity);
    setWind(data.wind);
    setIcon(data.icon);
    setCoordinates(data.coordinates);
  };

  return (
    <div className="weather">
      <div className="container">
        <Search updateWeather={updateWeatherData} />
        {temperature && (
          <div>
            <h1>{city}</h1>
            <ul>
              <li>
                <FormattedDate date={new Date()} />
              </li>
              <li>{description}</li>
            </ul>

            <div className="row mt-3">
              <div className="col-6">
                <div className="clearfix">
                  <div className="float-left">
                    <Icons code={icon} size={50} />
                  </div>

                  <div className="float-left">
                    <Temperature celsius={temperature} />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>Humidity: {humidity}%</li>
                  <li>Wind: {wind} km/h</li>
                </ul>
              </div>
            </div>

            {coordinates && <Forecast coordinates={coordinates} />}
          </div> //only rendered when coordinates are available.
        )}
        <Footer />
      </div>
    </div>
  );
}

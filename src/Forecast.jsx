import React, { useState } from "react";
import Icons from "./Icons";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(false);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(response.data);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <div className="WeekDay"> {forecast[0].time}</div>
            <Icons code={forecast[0].condition.icon} size={45} />
            <div className="TemperatureForecast">
              <span className="max-Temperature">
                {forecast[0].temperature.maximum}°
              </span>
              <span className="min-Temperature">
                {forecast[0].temperature.minimum}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "6bfa54f242cbb59343d4e58db578dc61";
    let longitude = 23;
    let latitude = 30.6;

    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}

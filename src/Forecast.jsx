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

  function day() {
    const date = new Date(forecast[0].time * 1000);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <div className="WeekDay"> {day()}</div>
            <Icons code={forecast[0].condition.icon} size={45} />
            <div className="TemperatureForecast">
              <span className="max-Temperature">
                {Math.round(forecast[0].temperature.maximum)}°
              </span>
              <span className="min-Temperature">
                {Math.round(forecast[0].temperature.minimum)}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "f063aad8tb9d2a804775off7e6bf14bb";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;

    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}

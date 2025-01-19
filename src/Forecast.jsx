import React, { useState, useEffect } from "react";
import Icons from "./Icons";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(false);

  useEffect(() => {
    setLoaded(false); //the state that changes when the below variable is changed
  }, [props.coordinates]); //the changing variable

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(response.data);
  }

  function day(timestamp) {
    const date = new Date(timestamp * 1000);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <div className="WeekDay"> {day(dailyForecast.time)}</div>
                  <Icons code={dailyForecast.condition.icon} size={40} />
                  <div className="TemperatureForecast">
                    <span className="max-Temperature">
                      {Math.round(dailyForecast.temperature.maximum)}°
                    </span>
                    <span className="min-Temperature">
                      {Math.round(dailyForecast.temperature.minimum)}°
                    </span>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
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

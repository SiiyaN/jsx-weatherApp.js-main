import React from "react";
import Icons from "./Icons";
import axios from "axios";
import "./Forecast.css";

export default function Forecast() {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "f063aad8tb9d2a804775off7e6bf14bb";
  let longitude = 30.5;
  let latitude = 23;

  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="WeekDay"> Thu</div>
          <Icons code="02d" size={45} />
          <div className="TemperatureForecast">
            <span className="max-Temperature">30°</span>
            <span className="min-Temperature">19°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

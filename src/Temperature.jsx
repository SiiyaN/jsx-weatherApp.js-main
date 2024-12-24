import React from "react";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <h2>
        <span className="temperatureValue">⛅ {props.value}</span>
        <span className="Units">°C | °F</span>
      </h2>
    </div>
  );
}

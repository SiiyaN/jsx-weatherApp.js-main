import React from "react";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">°C</span>
    </div>
  );
}

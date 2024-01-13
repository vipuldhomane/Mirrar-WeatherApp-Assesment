import React from "react";

const ToggleUnits = ({ units, setUnits }) => {
  const handleToggle = () => {
    setUnits(units === "metric" ? "imperial" : "metric");
  };

  return (
    <div className="toggle-units">
      <label>
        <input
          type="checkbox"
          checked={units === "imperial"}
          onChange={handleToggle}
        />
        Toggle Units (°C/°F)
      </label>
    </div>
  );
};

export default ToggleUnits;

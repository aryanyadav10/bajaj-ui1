import React, { useState } from "react";

function Dropdown({ onOptionsChange }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = ["Alphabets", "Numbers", "Highest Lowercase Alphabet"];

  const handleChange = (e) => {
    const { value, checked } = e.target;
    const updatedOptions = checked
      ? [...selectedOptions, value]
      : selectedOptions.filter((option) => option !== value);

    setSelectedOptions(updatedOptions);
    onOptionsChange(updatedOptions);
  };

  return (
    <div className="dropdown-container">
      <h3>Select Options</h3>
      {options.map((option) => (
        <div key={option} className="dropdown-option">
          <input
            type="checkbox"
            value={option}
            onChange={handleChange}
          />
          <label>{option}</label>
        </div>
      ))}
    </div>
  );
}

export default Dropdown;

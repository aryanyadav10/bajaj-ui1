import React, { useState } from "react";
import axios from "axios";

function Form({ onResponse }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const validateJSON = (json) => {
    try {
      JSON.parse(json);
      return true;
    } catch (e) {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateJSON(input)) {
      setError("Invalid JSON format!");
      return;
    }
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/bfhl", JSON.parse(input));
      onResponse(response.data);
    } catch (err) {
      setError("Error calling API!");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder='Enter JSON e.g. {"data": ["A", "C", "z"]}'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="json-input"
        />
        {error && <p className="error">{error}</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;

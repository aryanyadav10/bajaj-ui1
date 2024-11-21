import React, { useState } from "react";
import Form from "./form";
import Dropdown from "./dropdown";
import "./App.css";

function App() {
  const [response, setResponse] = useState(null);
  const [options, setOptions] = useState([]);

  const handleResponse = (data) => {
    setResponse(data);
  };

  const handleOptionsChange = (selectedOptions) => {
    setOptions(selectedOptions);
  };

  const renderResponse = () => {
    if (!response || options.length === 0) return null;

    const result = {};
    if (options.includes("Alphabets")) result["Alphabets"] = response.alphabets;
    if (options.includes("Numbers")) result["Numbers"] = response.numbers;
    if (options.includes("Highest Lowercase Alphabet"))
      result["Highest Lowercase Alphabet"] = response.highest_lowercase;

    return (
      <div className="response-container">
        <h3>Response</h3>
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </div>
    );
  };

  return (
    <div className="app-container">
      <h1 className="title">COLL17091999</h1>
      <Form onResponse={handleResponse} />
      {response && <Dropdown onOptionsChange={handleOptionsChange} />}
      {renderResponse()}
    </div>
  );
}

export default App;

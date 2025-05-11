import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  const [condition, setCondition] = useState("");
  const [wind, setWind] = useState(0);
  const [feelsLike, setFeelsLike] = useState("");
  const [direction, setDirection] = useState("");
  const [iconURL, setIconURL] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  async function fetchData(inputValue) {
    try {
      const data = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=efbf935862ae474bbd161845251105&q=${inputValue}&aqi=yes`
      );
      const json = await data.json();
      console.log(json);
      if (json.error) {
        // Handle API error from response
        setErrMsg(json.error.message);
        setHasSearched(false); // hide previous weather data if any
        return;
      }

      setErrMsg("");
      setTemp(json.current.temp_c);
      setWind(json.current.wind_kph);
      setDirection(json.current.wind_dir);
      setCondition(json.current.condition.text);
      setIconURL(json.current.condition.icon);
      setFeelsLike(json.current.feelslike_c);
      setLocation(
        json.location.name +
          ", " +
          json.location.region +
          ", " +
          json.location.country
      );
      setHasSearched(true);
    } catch (err) {
      setError("Something went wrong while fetching data.");
      setHasSearched(false);
    }
  }

  const handleChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };
  const search = () => {
    if (inputValue.trim() === "") return; // prevent empty input
    fetchData(inputValue);
  };

  return (
    <>
      {!hasSearched && <h1>Welcome, Search you city</h1>}
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={search}>Search</button>
      {errMsg && <h2 style={{ color: "red" }}>{errMsg}</h2>}
      {hasSearched && (
        <div>
          <h1>{location}</h1>
          <h2>Temperature: {temp}</h2>
          <h2>
            <img src={iconURL} alt="Icon" /> {condition}
          </h2>
          <h3>Feels like: {feelsLike}</h3>
          <h3>Wind speed & direction: {wind + "kmph" + ", " + direction}</h3>
        </div>
      )}
    </>
  );
}

export default App;

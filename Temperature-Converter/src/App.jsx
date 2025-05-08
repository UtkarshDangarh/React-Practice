import { useState } from "react";
import "./App.css";

function App() {
  const [celcius, setCelcius] = useState("");
  const handelChange = (e) => {
    // setCelcius(Number(e.target.value)); //initially, e.target.value is a string. When we delete everything using backspace, e.target.value becomes an empty string (""). Number("") returns 0 in JavaScript.
    const value = e.target.value;
    setCelcius(value === "" ? "" : Number(value));
  };

  return (
    <>
      <div>
        <label>
          Temp in Celcius :{" "}
          <input type="text" value={celcius} onChange={handelChange} />
        </label>
        <p>Temp in Kelvin = {celcius + 273.15}</p>
        <p>Temp in Farenhiet = {celcius * (9 / 5) + 32}</p>
      </div>
    </>
  );
}

export default App;

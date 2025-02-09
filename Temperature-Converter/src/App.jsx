import { useState } from "react";
import "./App.css";

function App() {
  const [celcius, setCelcius] = useState(0);
  const handelChange = (e) => {
    setCelcius(Number(e.target.value));
  };

  return (
    <>
      <div>
        <label>
          Temp in Celcius :{" "}
          <input type="number" value={celcius} onChange={handelChange} />
        </label>
        <p>Temp in Kelvin = {celcius + 273.15}</p>
        <p>Temp in Farenhiet = {celcius * (9 / 5) + 32}</p>
      </div>
    </>
  );
}

export default App;

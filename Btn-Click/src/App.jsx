import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const addValue = () => {
    setCount((count) => count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div>
        <button onClick={addValue}>Button</button>
        <h2>Button Clicked {count} times!</h2>
      </div>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;

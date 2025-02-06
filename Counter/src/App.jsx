import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const minus = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  const plus = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <button onClick={plus}>Plus</button>
      <div>{count}</div>
      <button onClick={minus}>Minus</button>
    </>
  );
}

export default App;

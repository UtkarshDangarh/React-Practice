import { useState } from "react";
import "./App.css";
import Text from "./Text";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const toggle = () => {
    setIsVisible(!isVisible);
    //Settter function takes an callback function which give us access to the previous value of the state
    // variable, here I applied conditional rendering on previous value of the state variable and changed
    // which changes the value from one to another
    setBtnText((prevText) => (prevText === "Hide" ? "Show" : "Hide"));
  };
  const [btnText, setBtnText] = useState("Hide");

  return (
    <>
      <button onClick={toggle}>{btnText}</button>
      {isVisible && <Text />}
    </>
  );
}

export default App;

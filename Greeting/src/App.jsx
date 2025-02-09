import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const [submiteedUser, setSubmittedUser] = useState("");
  const handelChange = (e) => {
    setUser(e.target.value);
  };

  const submit = () => {
    setSubmittedUser(user);
  };
  return (
    <>
      <input type="text" value={user} onChange={handelChange} />
      <button onClick={submit}>Submit</button>
      {submiteedUser && <p>Hello {submiteedUser}</p>}
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState("");

  //created this state as if we used "user" this will change live when any changes are being done on input.
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

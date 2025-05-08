import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  //Using useEffect with [] so that it Run this effect when the component is first added to the DOM.
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch("https://dummyjson.com/quotes/random");
    const json = await data.json();
    console.log(json);
    setQuote(json.quote);
    setAuthor(json.author);
  }
  return (
    <>
      <h1>Quote Of the day</h1>
      <div>
        <p>{quote}</p>
        <h3>{author}</h3>
        <button onClick={fetchData}>Random</button>
      </div>
    </>
  );
}

export default App;

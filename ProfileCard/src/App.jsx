import "./App.css";
import CardLayout from "./Components/CardLayout";

function App() {
  const obj = {
    name: "Walter White",
    position: "Cook",
    city: "Albuquerque, New Mexico",
    followers: "2222",
    following: "120",
    posts: "98",
  };
  return (
    <>
      <CardLayout {...obj} />
    </>
  );
}

export default App;

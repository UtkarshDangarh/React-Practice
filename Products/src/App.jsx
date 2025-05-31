import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CardLayout from "./Components/CardLayout";

function App() {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [inputValue, SetInputValue] = useState("");

  async function fetchData() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setList(data);
    setFilteredList(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function highRated() {
    const highRatedItems = list.filter((item) => item.rating.rate > 4);
    setFilteredList(highRatedItems);
  }

  function search() {
    const result = list.filter((item) =>
      item.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredList(result);
  }

  function clear() {
    setFilteredList(list);
    SetInputValue("");
  }

  // if (filteredList.length === 0) {
  //   return <h1>No result found</h1>;
  // }

  return (
    <>
      <div className=" flex justify-between my-2">
        <div>
          <input
            className="border-black border rounded-md m-1.5"
            type="text"
            value={inputValue}
            onChange={(e) => {
              SetInputValue(e.target.value);
            }}
          />
          <button
            className="px-5 py-2 bg-blue-300 rounded-md m-1.5 cursor-pointer"
            onClick={search}
          >
            Search
          </button>
        </div>
        <button
          className="px-5 py-2 bg-blue-300 rounded-md cursor-pointer"
          onClick={highRated}
        >
          High Rated
        </button>
        <button
          className="px-5 py-2 bg-blue-300 rounded-md cursor-pointer"
          onClick={clear}
        >
          Clear Filter
        </button>
      </div>
      <div className="flex flex-wrap gap-3">
        {filteredList.map((item) => {
          return (
            <div key={item.id}>
              <CardLayout rate={item.rating.rate} {...item} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;

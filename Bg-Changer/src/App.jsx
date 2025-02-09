import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className=" text-white h-screen w-full"
        style={{ backgroundColor: color }}
      >
        <div
          className="w-full h-screen duration-200"
          style={{ backgroundColor: color }}
        >
          <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-4 bg-white px-2 py-2 rounded-3xl ">
              <button
                onClick={() => setColor("red")}
                className="outline-none px-4 rounded-xl text-white shadow-sm"
                style={{ backgroundColor: "red" }}
              >
                Red
              </button>
              <button
                onClick={() => setColor("#7CB9E8")}
                className="outline-none px-4 rounded-xl text-white shadow-sm"
                style={{ backgroundColor: "#7CB9E8" }}
              >
                Blue
              </button>
              <button
                onClick={() => setColor("olive")}
                className="outline-none px-4 rounded-xl text-white shadow-sm"
                style={{ backgroundColor: "olive" }}
              >
                Olive
              </button>
              <button
                onClick={() => setColor("green")}
                className="outline-none px-4 rounded-xl text-white shadow-sm"
                style={{ backgroundColor: "green" }}
              >
                Green
              </button>
              <button
                onClick={() => setColor("lavender")}
                className="outline-none px-4  rounded-xl text-black shadow-sm"
                style={{ backgroundColor: "lavender" }}
              >
                Lavender
              </button>
              <button
                onClick={() => setColor("cyan")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
                style={{ backgroundColor: "cyan " }}
              >
                cyan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

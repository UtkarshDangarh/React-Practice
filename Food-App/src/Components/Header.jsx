import React, { useState } from "react";
import { App_Logo } from "../Utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const online = useOnlineStatus();

  return (
    <div className="flex justify-between items-center border m-2">
      <div className="p-2">
        <img className="w-32" src={App_Logo} alt="LOGO" />
      </div>
      <div className="flex gap-6  list-none p-2">
        <li className="px-1.5 cursor-pointer">{online ? "🟢" : "🔴"}</li>
        <li className="bg-orange-300 px-4 py-2 rounded-md">
          <Link to="/">Home</Link>
        </li>
        <li className="bg-orange-300 px-4 py-2 rounded-md">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="bg-orange-300 px-4 py-2 rounded-md">
          <Link to="/about">About</Link>
        </li>
        <li className="bg-orange-300 px-4 py-2 rounded-md">
          <Link to="/cart">Cart</Link>
        </li>
        <button
          className="bg-orange-300 px-4 py-2 w-24 rounded-md cursor-pointer"
          onClick={() => {
            btnText === "Login" ? setBtnText("Logout") : setBtnText("Login");
          }}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Header;

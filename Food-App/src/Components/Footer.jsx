import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" rounded-lg m-4 py-4 bg-orange-300 flex justify-around items-center">
      <div>
        <p className="text-sm  sm:text-center">
          © 2025 <Link className="hover:underline">Utkarsh Dangarh</Link>. All
          Rights Reserved.
        </p>
      </div>

      <div className="flex gap-12">
        <p>
          <Link to="/about">About</Link>
        </p>
        <p>
          <Link to="/contact">Contact</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;

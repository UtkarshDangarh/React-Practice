import React from "react";

function CardLayout({ image, title, price, rate, description }) {
  const des = description.substring(0, 40);
  const titleName = title.substring(0, 25);
  return (
    <div className="flex flex-col w-56 h-80 bg-blue-200 p-2 gap-2">
      <img src={image} className="w-full h-32" alt="" />
      <h2 className="font-semibold">{titleName}...</h2>
      <div className="font-semibold flex justify-between">
        <h3>{price}</h3>
        <h3>{rate}</h3>
      </div>
      <p>{des}...</p>
      <button className="font-bold">Add to cart</button>
    </div>
  );
}

export default CardLayout;

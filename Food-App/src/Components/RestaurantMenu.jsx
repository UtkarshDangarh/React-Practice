import React, { useState } from "react";
import { resImageUrl } from "../Utils/Constants";

const RestaurantMenu = ({ menuData, toggle, setShowIndex }) => {
  const { title, itemCards } = menuData.card.card;

  return (
    <div>
      <div
        className="flex justify-between font-bold px-6 py-2 rounded-md bg-orange-300 shadow-lg"
        onClick={() => {
          setShowIndex();
        }}
      >
        <header className="cursor-pointer">
          {title} ({itemCards.length})
        </header>
        <p>⌄</p>
      </div>
      {toggle && (
        <div>
          {itemCards.map((item) => {
            return (
              <div
                key={item.card.info.id}
                className="flex justify-between items-center border m-1 p-1 rounded-md"
              >
                <div className="flex flex-col w-full">
                  <div>
                    <p> {item.card.info.name} </p>
                    <p>₹ {Math.floor(item.card.info.price / 100)}</p>
                  </div>
                  <div className="text-xs">{item.card.info.description}</div>
                </div>

                <div>
                  <div className="absolute">
                    <button className="px-2 bg-black text-white  rounded-md m-0.5 h-6">
                      Add
                    </button>
                  </div>
                  <img
                    src={resImageUrl + item.card.info.imageId}
                    className="w-32"
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;

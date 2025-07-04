import React, { useEffect, useState } from "react";
import { API } from "../Utils/Constants";
import ResCard, { isOpen } from "./ResCard";
import ShimerUI from "./ShimerUI";
import { Link } from "react-router-dom";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [resList, setResList] = useState([]);
  const [filteredlist, setFilteredList] = useState([]);

  const ResCardPromoted = isOpen(ResCard);
  async function fetchData() {
    const data = await fetch(API);
    const json = await data.json();
    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function highRated() {
    let highRatedList = filteredlist.filter(
      (item) => item.info.avgRating >= 4.3
    );
    setFilteredList(highRatedList);
  }

  function clearFilter() {
    setFilteredList(resList);
  }

  function search() {
    let searchResult = filteredlist.filter((item) =>
      item.info.name.toLowerCase().includes(searchTxt.toLowerCase())
    );
    setFilteredList(searchResult);
    setSearchTxt("");
  }

  return resList.length === 0 ? (
    <ShimerUI />
  ) : (
    <>
      <div className="flex justify-between items-center">
        <div>
          <input
            className="border rounded-sm m-2 h-10"
            type="text"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button
            className="bg-orange-300 px-4 py-2 m-2 rounded-md"
            onClick={search}
          >
            search
          </button>
        </div>
        <div>
          <button
            className="bg-orange-300 px-4 py-2 rounded-md m-2"
            onClick={highRated}
          >
            High Rated
          </button>
          <button
            className="bg-orange-300 px-4 py-2 rounded-md m-2"
            onClick={clearFilter}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="grid grid-cols-6 ">
        {filteredlist.map((restaurant) => {
          return (
            //restaurant.info.isOpen
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {restaurant.info.isOpen ? (
                <ResCardPromoted resData={restaurant} />
              ) : (
                <ResCard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;

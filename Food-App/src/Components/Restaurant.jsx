import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../Utils/useFetchData";
import RestaurantMenu from "./RestaurantMenu";

function Restaurant() {
  const { resID } = useParams();
  // const [toggle, setToggle] = useState(false);
  const [showIndex, setShowIndex] = useState(null);

  const { resData, loading } = useFetchData(
    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=${resID}`
  );

  console.log(resData);
  if (loading || !resData) return <p>Loading...</p>;

  const { name, city, locality, costForTwoMessage, cuisines } =
    resData?.data?.cards?.[2]?.card?.card?.info;

  const categories =
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="flex items-center flex-col">
      <div className="flex border  w-3xl px-7 py-2 rounded-lg flex-col m-2">
        <h1 className="font-bold text-xl">{name}</h1>
        <div>
          <div className="flex gap-4">
            <h3 className="font-semibold">{city}</h3>
            <h3 className="font-semibold">{costForTwoMessage}</h3>
          </div>
          <p className="font-medium">{cuisines.join(",")}</p>
          <p className="font-medium">{locality}</p>
        </div>
      </div>

      <div className="flex flex-col border w-3xl px-7 py-2 rounded-lg gap-2">
        {categories.map((item, index) => {
          return (
            //Controlled component
            <RestaurantMenu
              key={item.card.card.title}
              menuData={item}
              toggle={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Restaurant;

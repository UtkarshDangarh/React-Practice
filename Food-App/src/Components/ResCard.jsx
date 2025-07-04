import React from "react";
import { resImageUrl } from "../Utils/Constants";

const ResCard = ({ resData }) => {
  const { name, avgRatingString, costForTwo, cloudinaryImageId, cuisines } =
    resData.info;
  const { deliveryTime } = resData.info.sla;
  console.log(resData.info.id);
  return (
    <div className="flex flex-col flex-wrap gap-2 bg-neutral-100 w-52 p-2 m-1">
      <img src={resImageUrl + cloudinaryImageId} alt="Restaurant Logo" />
      <h2 className="font-semibold text-lg">{name}</h2>
      <p className="max-w-full">{cuisines.join(",")}</p>
      <p>{avgRatingString}</p>
      <p>{costForTwo}</p>
      <p>{deliveryTime} Mins</p>
    </div>
  );
};

export const isOpen = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black rounded-md text-white p-1">
          Open
        </label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;

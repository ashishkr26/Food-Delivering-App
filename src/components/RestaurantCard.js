import React from "react";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resList } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    cloudinaryImageId,
    areaName,
  } = resList?.info;

  const { header, subHeader } = resList?.info?.aggregatedDiscountInfoV3 || {};

  return (
    <div
      className="m-4 p-4 w-[240px] rounded-lg bg-gray-200 h transform transition-transform duration-300 hover:scale-95"
      style={{ height: "435px" }}
    >
      <img
        className="rounded-lg shadow-2xl"
        src={CDN_URL + cloudinaryImageId}/>
      <h4 className=" absolute -mt-8 ml-1 text-xl  font-bold text-slate-50">{header} {subHeader}</h4>
      <h3 className="text-base font-semibold font-gilroy pt-4">{name}</h3>
      <h4 className="text-sm pt-1">{avgRating} ⭐ . {sla.deliveryTime} Minutes 🛵</h4>
      <h4 className="text-sm font-gilroy pt-1">{cuisines.join(", ").slice(0, 55)}</h4>
      <h4 className="text-sm font-gilroy pt-2">{areaName}</h4>
      <h4 className="text-sm font-gilroy pt-2">Rs. {costForTwo}</h4>
    </div>
  );
};
export const withPromotedlable = () => {
  return (props) => {
    return (
      <div>
        <RestaurantCard {...props} />
        <label>Promoted</label>
      </div>
    );
  };
};

export default RestaurantCard;

import React from "react";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  
  const { resList } = props;
  const {name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId,locality} = resList?.info;

  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{locality}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Ratings {avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;

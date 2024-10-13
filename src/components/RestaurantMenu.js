import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
console.log(resInfo)
  if (resInfo === null) return <Shimmer />;

  const { name, avgRating, costFortwoMessage, areaName, cuisines } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};
  const itemCards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards || [];
      const { maxDeliveryTime, minDeliveryTime} =
      resInfo?.data?.cards[2]?.card?.card?.info.sla || {};
      console.log(maxDeliveryTime, minDeliveryTime)

//Finding all Categories
  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        return (
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  // console.log(categories);

  return (
    <div className=" ">
      <div className="w-7/12   mx-auto " >
      <h2 className="text-2xl font-bold mt-8 " >{name}</h2>

      <div className="rounded-[12px] border-2 shadow-xl p-4 my-10 h-38">
      <p className="font-bold">{`Average Ratings: ${avgRating}⭐`}</p>
      <h3 className="font-bold text-orange-500 ">{cuisines.join(", ")}. </h3>
      <div className="py-2">
      <span>📍 </span>
      <span>Outlet</span><span className="font-bold py-4"> {areaName}</span>
      </div>
      
      <h3 className="py-4">{`🕧 ${minDeliveryTime} - ${maxDeliveryTime} Mints.`}</h3>
      
      {/* <p>{`Cost for Two: ${costFortwoMessage}`}</p> */}
      </div>
      
      </div>
    

      {/* categories*/}
      <div>
      {categories.map((category)=>{
       console.log("category", category)

        return( <RestaurantCategory key={category.card.card.itemCards?.card?.info?.id} data={category.card.card} />)
       
      })}
      </div> 
      

      {/* <ul>
        <div className="menu-item-card">
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              <h4>{item.card.info.name}</h4>
              <h5>
                Ratings {item.card.info.ratings.aggregatedRating.rating} ⭐
              </h5>
              <h5>{`Rs.${item.card.info.price / 100}`}</h5>
              <h5>{item.card.info.description}</h5>
            </li>
          ))}
        </div>
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;

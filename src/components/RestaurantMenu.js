
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";



const RestaurantMenu = () => {

const {resId}=useParams();
console.log(resId);
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    try {
      const response = await fetch(MENU_API + resId);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      setResInfo(json);
      console.log(json)
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Shimmer />;
  if (error) return <div>Error: {error.message}</div>;

  const { name, avgRating, costFortwoMessage, areaName,cuisines } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};
  const itemCards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards || [];
  console.log(itemCards);

  return (
    <div className="res-menu">
      <h2>{name}</h2>
      <h3>{areaName}</h3>
      <h3>{cuisines.join(",")}</h3>
      <p>{`Average Rating: ${avgRating}`}</p>
      <p>{`Cost for Two: ${costFortwoMessage}`}</p>
      <ul>
        <div className="menu-item-card">
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              <h4>{item.card.info.name}</h4>
              <h5>Ratings  {item.card.info.ratings.aggregatedRating.rating} ⭐</h5>
              <h5>{`Rs.${item.card.info.price/100}`}</h5>
              <h5>{item.card.info.description}</h5>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default RestaurantMenu;

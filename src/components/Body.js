import React, { useState, useEffect } from "react";
import RestaurantCard, { withPromotedlable } from "./RestaurantCard";
import { Link } from "react-router-dom";
// import { resList } from "../data/data";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchText, setSearchtext] = useState("");
  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedlable(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      if (!response.ok) {
        throw new Error("Network response not okay");
      }
      const jsonData = await response.json();
      setListOfRestaurant(
        jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
      setSearchRestaurant(
        jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };



  const handleTopRated = () => {

    const filterRes = searchRestaurant.filter((restaurant) => {
      return restaurant?.info?.avgRating > 4.4;
    });

    setSearchRestaurant(filterRes);
  };

  const handleSearch = () => {
  };

  if (onlineStatus === false) {
    return (
      <div>
        <h1>Looks like your internet is off</h1>
      </div>
    );
  }
  
  return loading == true ? (
    <Shimmer resList={searchRestaurant} />
  ) : (
    <div className="m-4">
      <div className="filter-container flex justify-between mx-20">
        <div className="top-rated-btn ml-4 ">
          <button
            className="border-2 border-green-200 text-black-500 bg-white hover:bg-green-500 hover:text-white px-4 py-2 rounded"
            onClick={handleTopRated}
          >
            Top Rated Resturants
          </button>
        </div>
        <div className="searchBar ">
          <input
            className="border border-solid border-black rounded-lg p-4 mr-4 w-96 h-10"
            type="text"
            placeholder="🔍 Search Restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          />

          <button
            className="border-2 border-green-200 text-black-00 bg-white hover:bg-green-500 hover:text-white px-4 py-2 rounded"
            onClick={() => {
              const searchRes = listOfRestaurant.filter((restaurant) => {
                return restaurant?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase());
              });
              setSearchRestaurant(searchRes);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-wrap h-96 ml-20">
        {searchRestaurant.map((restaurant) => (
          <Link
            className="rsl"
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
           
              <RestaurantCard resList={restaurant} />
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

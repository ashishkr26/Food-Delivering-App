import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
// import { resList } from "../data/data";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchText, setSearchtext] = useState("");

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
      console.log(listOfRestaurant);
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
    console.log("button clicked");

    const filterRes = searchRestaurant.filter((restaurant) => {
      return restaurant?.info?.avgRating > 4.4;
    });

    setSearchRestaurant(filterRes);
  };

  const handleSearch = () => {
    console.log(searchText);
  };

  return loading ==true ? (
    <Shimmer resList={searchRestaurant} />
  ) : (
    <div className="body">
      <div className="filter-container">
        <div className="top-rated-btn">
          <button onClick={handleTopRated}>Top Rated resturants</button>
        </div>
        <div className="searchBar">
          <input
            type="text"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          />

          <button
            className="search-btn"
            onClick={() => {
              const searchRes = listOfRestaurant.filter((restaurant) => {
                return restaurant?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase());
              });
              console.log(searchRes);
              setSearchRestaurant(searchRes);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="res-container">
        {searchRestaurant.map((restaurant) => (
          <Link className="rsl" to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}> <RestaurantCard  resList={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

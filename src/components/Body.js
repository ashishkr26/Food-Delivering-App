import React, { useState, useEffect } from "react";
import RestaurantCard, { withPromotedlable } from "./RestaurantCard";
import { Link } from "react-router-dom";
// import { resList } from "../data/data";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { CDN_URL } from "../utils/constant";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState([]);
  const [isClicked, SetIsClicked] = useState(false)
  const [imageList, setImageList] = useState([]);
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
      setImageList(jsonData.data.cards[0].card.card.imageGridCards.info);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const imageGrid = imageList || {};

  const handleTopRated = () => {
    const filterRes = searchRestaurant.filter((restaurant) => {
      return restaurant?.info?.avgRating > 4.4;
    });

    setSearchRestaurant(filterRes);
  };

  const handleSearch = () => {};

  if (onlineStatus === false) {
    return (
      <div>
        <h1>Looks like your internet is off</h1>
      </div>
    );
  }

  const [gridCount, setGridCount] = useState(0);

  const handleNextGrid = () => {
    setGridCount((prevCount) => Math.min(prevCount + 2, imageGrid.length - 2));
  };

  const handlePrevGrid = () => {
    setGridCount((prevCount) => Math.max(prevCount - 2, 0));
  };

  return loading == true ? (
    <Shimmer resList={searchRestaurant} />
  ) : (
    <div className="m-4">
      <div className="filter-container flex justify-between mx-20">
        <div className="top-rated-btn ml-4 transition-opacity duration-300 ease-in-out">
          <button
            className="border-2 border-green-200 text-black-500 bg-white hover:bg-green-500 hover:text-white px-4 py-2 rounded-lg"
            onClick={handleTopRated}
          >
            Top Rated Resturants
          </button>
        </div>
        <div className="searchBar ">
          <input
            className={`border border-solid border-black rounded-lg p-4 mr-4  h-10 ${isClicked ? "w-[660px]" : "w-52"}`}
            type="text"
            placeholder="🔍 Search Restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
            onClick={()=>{SetIsClicked(true)}}
            onBlur={()=>{SetIsClicked(false)}}
          />

          <button
            className="border-2 border-green-200 text-black-00 bg-white hover:bg-green-500 hover:text-white px-4 py-2 rounded-lg"
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

      <div className="mx-8 shadow-lg">
        <h1 className="font-bold text-xl ml-20 mt-10">
          Ashish, What's On Your Mind.
        </h1>

        <div className="flex justify-end -mt-10 p-4 mr-10">
          <button
            onClick={handlePrevGrid}
            disabled={gridCount === 0}
            className="text-2xl disabled:opacity-50"
          >
            ⬅️
          </button>
          <button
            onClick={handleNextGrid}
            disabled={gridCount + 7 >= imageGrid.length}
            className="text-2xl disabled:opacity-50"
          >
            ➡️
          </button>
        </div>

        <div className="flex  ml-16 overflow-hidden relative">
          <div
            className="flex"
           // Adjusting based on visible items
          >
            {imageGrid.slice(gridCount, gridCount + 7).map((image) => (
              <div key={image.id} className="flex shrink-0">
                <img
                  className="w-36"
                  src={`${CDN_URL}${image.imageId}`}
                  alt="grid"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        {" "}
        <label className="text-xl font-bold mx-24 py-10">
          Top Restaurants Chain in Bangalore
        </label>
      </div>

      <div className="flex flex-wrap  h-72 ml-20">
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

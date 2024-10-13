import { CDN_URL } from "../utils/constant";
import { useState } from "react";
 

const ItemList = (items) => {
 
  console.log("restaurant item are",items.items);
  // const ratings= items?.items?.card?.ratings?.aggregatedRating?.rating;
  // console.log("rating", ratings)
  const updateCart =()=>{
    return(
      console.log("cart updated")
    )

  }

  return (
    <div>
      {items.items.map((item) => {
        return (
          <div
            className="p-2 m-2 flex justify-between border-b-2 text-left border-gray-200"
            key={item?.card?.info?.id}
          >
            <div className="w-9/12">
              <div className="py-2">
                <p>
                {item?.card?.info?.isVeg ===1 ?"🟩":"🟥"}
                </p>
                <span className="text-lg font-semibold">
                  {item?.card?.info?.name} 
                </span>
                <p className="font-semibold">
                    ₹ {item?.card?.info?.price / 100||item?.card?.info?.defaultPrice/100}
                </p>
                <p className="font-semibold pt-2 text-green-700 ">

                ⭐{item?.card?.info?.ratings?.aggregatedRating?.rating} {" "}
                {`(${item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})`}
                </p>
                <p className="text=xs font-gilroy py-2">{item?.card?.info?.description}</p>
              </div>
            </div>
            <div className="w-3/12 p-4">
              <img className="w-full rounded-2xl -mt-2" src={CDN_URL + item.card.info.imageId} />
              <button onClick={updateCart} className="text-green-500 font-bold border-2 w-24 h-9 rounded-md -mt-5 ml-12 absolute bg-white hover:bg-red-200" >ADD</button>
            </div>

            {/* {item.card.info.} */}
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;

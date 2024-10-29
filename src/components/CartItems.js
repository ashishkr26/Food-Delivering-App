import { clearCart, removeItem } from "../store/cartSlice";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CartItems = (cartItems) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteCart = () => {
    dispatch(clearCart(cartItems));
  };

  return (
    <div>
      <div></div>
      {cartItems.item.length === 0 ? (
        <div>
          <p className="w-7/12 bg-gray-50 shadow-lg p-4 my-4 mx-auto">
            Your cart is empty.
          </p>
          {/* <Link to="/" className="link">
            <button className="m-4 p-2 bg-gray-100 border border-black">
              Add Items
            </button>
          </Link> */}

          <button
            className=" m-4 p-2 bg-gray-100 border border-black"
            onClick={() => navigate("/")}
          >
            Add Item
          </button>
        </div>
      ) : (
        <div className="w-7/12 bg-gray-50 shadow-lg p-4 my-4 mx-auto">
          <div className="font-bold text-xl">Added on Cart</div>
          {cartItems.item.map((item) => (
            <div
              className="p-2 m-2 flex justify-between border-b-2 text-left border-gray-200"
              key={item?.card?.info?.id}
            >
              <div className="w-9/12">
                <div className="py-2">
                  <p>{item?.card?.info?.isVeg === 1 ? "🟩" : "🟥"}</p>
                  <span className="text-lg font-semibold">
                    {item?.card?.info?.name}
                  </span>
                  <p className="font-semibold">
                    ₹{" "}
                    {item?.card?.info?.price / 100 ||
                      item?.card?.info?.defaultPrice / 100}
                  </p>
                  <p className="font-semibold pt-2 text-green-700 ">
                    ⭐{item?.card?.info?.ratings?.aggregatedRating?.rating}{" "}
                    {`(${item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})`}
                  </p>
                  <p className="text=xs font-gilroy py-2">
                    {item?.card?.info?.description}
                  </p>
                </div>
              </div>
              <div className="w-3/12 p-4">
                <img
                  className="w-full rounded-2xl -mt-2"
                  src={CDN_URL + item.card.info.imageId}
                />
                <button
                  onClick={() => handleUpdateCart(item)}
                  className="text-white font-bold  w-24 h-9 rounded-md -mt-5 ml-10 absolute bg-black hover:bg-white hover:text-black"
                >
                  ADD +
                </button>
              </div>

              {/* {item.card.info.} */}
            </div>
          ))}
        </div>
      )}

      <div className="w-6/12 m-auto">
        <button
          className="m-4 p-2 bg-black text-white border border-black"
          onClick={() => deleteCart(cartItems)}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartItems;

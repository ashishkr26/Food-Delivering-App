import React, { useState } from "react";
import Logo from "../../Logo.png";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  let onlineStatus = useOnlineStatus();

  //subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const { loggedInUser } = useContext(UserContext);

  const [searchRestaurant, setSearchRestaurant] = useState([]);

  const [loginText, setLogintext] = useState("Login");

  const handleLogin = () => {
    loginText === "Login" ? setLogintext("Logout") : setLogintext("Login");
  };
  const handleTopRated = () => {
    const filterRes = searchRestaurant.filter((restaurant) => {
      return restaurant?.info?.avgRating > 4.4;
    });

    setSearchRestaurant(filterRes);
  };
  return (
    <div className="flex justify-between  shadow-lg  sticky top-0 z-10 bg-white">
      <div className="logo-container">
       <Link to ="/"> <img className="w-32" src={Logo} /></Link>
      </div>

      <div className="flex items-center">
        <ul className="flex m-4 p-4 hover:text-red ">
          <li className="px-4  hover:text-orange-500  transform transition-transform duration-300 hover:scale-110">
            Online Status {onlineStatus ? "✅" : "🔴"}
          </li>

          <li className="px-4  hover:text-orange-500  transform transition-transform duration-300 hover:scale-110">
            <Link to="/" className="link">
              🏡Home
            </Link>
          </li>
          <li className="px-4  hover:text-orange-500  transform transition-transform duration-300 hover:scale-110">
            <Link to="/offers" className="link">
              📢Offers
            </Link>
          </li>

          <li className="px-4  hover:text-orange-500  transform transition-transform duration-300 hover:scale-110">
            <Link to="/support" className="link">
              🛄 Help
            </Link>
          </li>
          <li className="px-4  hover:text-orange-500  transform transition-transform duration-300 hover:scale-110">
            <Link to="/cart" className="link">
              <span className="ml-2 -my-2 absolute font-2xl ">
                {cartItems.length == 0 ? null : cartItems.length}
              </span>{" "}
              🛒 Cart
              <div class="absolute left-0 mt-2 w-48 bg-white text-black text-center rounded shadow-lg hidden group-hover:block">
                Your cart is empty
              </div>
            </Link>
            <div class="absolute left-0 mt-2 w-48 bg-white text-black text-center rounded shadow-lg hidden group-hover:block">
              Your cart is empty
            </div>
          </li>
          <li className="px-4  hover:text-orange-500  transform transition-transform duration-300 hover:scale-110">
            <button className="login-btn" onClick={handleLogin}>
              {loginText === "Logout" ? `Logout ${loggedInUser} 💂` : "Login"}
            </button>
          </li>
          {/* <li>
              {loggedInUSer}
            </li> */}
        </ul>
      </div>
    </div>
  );
};
export default Header;

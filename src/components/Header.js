import React, { useState } from "react";
import Logo from "../../Logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let onlineStatus = useOnlineStatus();

  const [loginText, setLogintext] = useState("Login");

  const handleLogin = () => {
    //   console.log("user login clicked");
    // if (loginText === "Login")
    //   setLogintext("Logout");
    // else setLogintext("Login");
    loginText === "Login" ? setLogintext("Logout") : setLogintext("Login");
  };
  return (
    <div className="flex justify-between  shadow-lg  ">
      <div className="logo-container">
        <img className="w-32" src={Logo} />
      </div>

      <div className="flex items-center">
        <ul className="flex m-4 p-4 hover:text-red ">
          <li className="px-4  hover:text-orange-500  transform transition-transform duration-300 hover:scale-110">Online Status {onlineStatus ? "✅" : "🔴"}</li>
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
            🛒Cart
            </Link>
            </li>
          <li className="px-4  hover:text-orange-500  transform transition-transform duration-300 hover:scale-110">
            <button className="login-btn" onClick={handleLogin}>
              {loginText==="Logout"?"💂Log0ut":"💂Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

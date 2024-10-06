import React, { useState } from "react";
import Logo from "../../Logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginText, setLogintext] = useState("Login");
  const handleLogin = () => {
    //   console.log("user login clicked");
    // if (loginText === "Login")
    //   setLogintext("Logout");
    // else setLogintext("Login");
    loginText === "Login" ? setLogintext("Logout") : setLogintext("Login");
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo} />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About Us
            </Link>
          </li>

          <li>
            <Link to="/contact" className="link">
              <>Contact Us</>
            </Link>
          </li>
          <li>Cart</li>
          <li>
            <button className="login-btn" onClick={handleLogin}>
              {loginText}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaPizzaSlice } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div className={navbar ? "navbar active" : "navbar"}>
      <div className="navbar-container container">
        <div className="menu-icon" onClick={handleClick}>
          <FaPizzaSlice className="icons" />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item ">
            <Link
              to="/"
              className={navbar ? "nav-links active" : "nav-links"}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/pizzas"
              className={navbar ? "nav-links active" : "nav-links"}
              onClick={closeMobileMenu}
            >
              Pizzas
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/desserts"
              className={navbar ? "nav-links active" : "nav-links"}
              onClick={closeMobileMenu}
            >
              Desserts
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/fullMenu"
              className={navbar ? "nav-links active" : "nav-links"}
              onClick={closeMobileMenu}
            >
              Full Menu
            </Link>
          </li>
          <li className="nav-btn">
            <button>Order Now</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

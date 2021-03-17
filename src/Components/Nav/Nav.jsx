import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const menuHandler = () => {
    document.querySelector(".menuBtn").classList.toggle("active");
    document.querySelector(".navList").classList.toggle("active");
  };
  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">LOGO-IMAGE</div>
        <div className="menu">
          <button className="menuBtn" onClick={menuHandler}>
            <i className="fa fa-bars"></i>
          </button>
          <ul className="navList">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

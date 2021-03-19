import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/splitscreen-logo.png";
import "./Nav.css";

function Nav() {
  const menuHandler = () => {
    document.querySelector(".menuBtn").classList.toggle("active");
    document.querySelector(".navList").classList.toggle("active");
  };
  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="menu">
          <ul className="navList">
            <li>
              <Link to="/left" className="desk-a">
                Vänster
              </Link>
            </li>
            <li>
              <Link to="/right" className="desk-a">
                Höger
              </Link>
            </li>
            <li>
              <Link to="/about" className="desk-a">
                About Us
              </Link>
            </li>
          </ul>
          <a href="#" className="login">
            Login
          </a>
          <button className="menuBtn" onClick={menuHandler}>
            <i className="fa fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

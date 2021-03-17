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
          <ul className="navList">
            <li>
              <Link to="/left" className="desk-a">
                SubpageA
              </Link>
            </li>
            <li>
              <Link to="/about" className="desk-a">
                SubpageB
              </Link>
            </li>
            <li>
              <Link to="/" className="desk-a">
                SubpageC
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

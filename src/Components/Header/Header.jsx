import React from "react";
import { Link } from "react-router-dom";
import splitRightImg from "../../assets/images/split-right.jpg";
import "./Header.css";

function Header() {
  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${splitRightImg})` }}
    >
      <section className="headerSection left">
        <h4>Ni söker</h4>
        <h1>Vänster</h1>
        <p>
          Lorem ipsum dolor sit amet conse adipisicing elit. Sit iste ipsum
          perspiciatis pariatur, minus
        </p>
        <Link to="/left" className="btn">
          Button
        </Link>
      </section>
      <section className="headerSection right">
        <h4>Ni söker</h4>
        <h1>Höger</h1>
        <p>
          Lorem ipsum dolor sit amet conse adipisicing elit. Sit iste ipsum
          perspiciatis pariatur, minus
        </p>
        <Link to="/right" className="btn">
          Button
        </Link>
      </section>
    </header>
  );
}

export default Header;

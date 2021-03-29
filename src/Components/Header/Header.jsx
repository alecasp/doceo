import React from "react";
import { Link } from "react-router-dom";
import splitLeftImg from "../../assets/images/split-left.jpg";
import splitRightImg from "../../assets/images/split-right.jpg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <section
        className="headerSection left"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(85, 153, 100, 0.5),
        rgba(85, 153, 100, 0.5)),
        url(${splitLeftImg})`,
        }}
      >
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
      <section
        className="headerSection right"
        style={{
          backgroundImage: `linear-gradient(to bottom,
            rgba(112, 56, 89, 0.5),
            rgba(112, 56, 89, 0.5)),
        url(${splitRightImg})`,
        }}
      >
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

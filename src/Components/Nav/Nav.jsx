import React from "react";
import css from "./Nav.module.css";

function Nav() {
  const links = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About Us",
      link: "#aboutus",
    },
    {
      name: "Contact Us",
      link: "#contactus",
    },
  ];

  const menuHandler = (e) => {
    document.querySelector("." + css.menuBtn).classList.toggle(css.active);
    document.querySelector("." + css.navList).classList.toggle(css.active);
  };

  return (
    <nav className={css.nav}>
      <div className={css.logo}>LOGO-IMAGE</div>
      <div className={css.menu}>
        <button className={css.menuBtn} onClick={menuHandler}>
          <i className="fa fa-bars"></i>
        </button>
        <ul className={css.navList}>
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

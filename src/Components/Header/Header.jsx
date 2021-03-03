import React, { useState } from "react";
import css from "./Header.module.css";
import HeaderSection from "./HeaderSection/HeaderSection";

function Header() {
  const [state, setState] = useState(() => ({
    left: {
      h1: "Vänster",
      h4: "Ni söker",
      p:
        "Lorem ipsum dolor sit amet conse adipisicing elit. Sit iste ipsum perspiciatis pariatur, minus",
      btn: "Button",
      class: "left",
    },
    right: {
      h1: "Höger",
      h4: "Ni söker",
      p:
        "Lorem ipsum dolor sit amet conse adipisicing elit. Sit iste ipsum perspiciatis pariatur, minus",
      btn: "Button",
      class: "right",
    },
  }));

  return (
    <header className={css.header}>
      <HeaderSection data={state.left} />
      <HeaderSection data={state.right} />
    </header>
  );
}

export default Header;

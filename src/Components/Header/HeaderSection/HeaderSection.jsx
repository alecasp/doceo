import React from "react";
import css from "./HeaderSection.module.css";

function HeaderSection(props) {
  return (
    <section className={css.headerSection + " " + css[props.data.class]}>
      <h4>{props.data.h4}</h4>
      <h1>{props.data.h1}</h1>
      <p>{props.data.p}</p>
      <a href="#" className="btn">
        {props.data.btn}
      </a>
    </section>
  );
}

export default HeaderSection;

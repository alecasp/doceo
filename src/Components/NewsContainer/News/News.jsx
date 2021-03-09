import React from "react";
import css from "./News.module.css";

function News(props) {
  return (
    <div className={css.news}>
      <h4>{props.name}</h4>
      <p>{props.desc}</p>
      <a href={props.link} className="shadow">
        Secondary
      </a>
    </div>
  );
}

export default News;

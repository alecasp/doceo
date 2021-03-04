import React from "react";
import css from "./News.module.css";

function News(props) {
  return (
    <a href={props.link} className={css.news}>
      <div className={css.newsImage}>
        <img src={props.src} alt="newImage" />
      </div>
      <h4>{props.name}</h4>
      <p>{props.desc}</p>
    </a>
  );
}

export default News;

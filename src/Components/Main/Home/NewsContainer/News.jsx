import React from "react";
import { Link } from "react-router-dom";

function News({ data }) {
  return (
    <div className="news">
      <div className="imgbox">
        <img src={data.img} alt="news" />
      </div>
      <h4>{data.name}</h4>
      <p>{data.desc}</p>
      <Link to={data.link} className="shadow">
        Read More
      </Link>
    </div>
  );
}

export default News;

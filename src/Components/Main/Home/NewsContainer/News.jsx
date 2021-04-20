import React from "react";
import { Link } from "react-router-dom";

function News({ data }) {
  return (
    <div className="news">
      <div className="imgbox">
        <img src={data.imageUrl} alt="news" />
      </div>
      <h4>{data.heading}</h4>
      <p>{data.description}</p>
      <Link to={data.link} className="shadow">
        Read More
      </Link>
    </div>
  );
}

export default News;

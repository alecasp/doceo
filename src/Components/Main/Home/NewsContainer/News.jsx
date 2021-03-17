import React from "react";
import { Link } from "react-router-dom";

function News({ data }) {
  return (
    <div className="news">
      <h4>{data.name}</h4>
      <p>{data.desc}</p>
      <Link to={data.link} className="shadow">
        {data.linkName}
      </Link>
    </div>
  );
}

export default News;

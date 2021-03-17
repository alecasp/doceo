import React, { useState } from "react";
import News from "./News";
import "./NewsContainer.css";

function NewsContainer() {
  const [newsData, setNewsData] = useState(() => [
    {
      name: "Rubrik",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque a dolorem quidem reprehenderit.",
      link: "#",
      linkName: "Secondary",
    },
    {
      name: "Rubrik-1",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque a dolorem quidem reprehenderit.",
      link: "#",
      linkName: "Secondary",
    },
  ]);
  return (
    <section className="container section newsContainer">
      <div className="newsBlock">
        {newsData.map((data, i) => (
          <News data={data} key={i} />
        ))}
      </div>

      <button>
        <i className="fas fa-angle-down"></i>
      </button>
    </section>
  );
}

export default NewsContainer;

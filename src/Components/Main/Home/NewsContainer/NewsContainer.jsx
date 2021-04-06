import React, { useState } from "react";
import News from "./News";
import NewsImg1 from "../../../../assets/images/Bat-Man.jpg";
import NewsImg2 from "../../../../assets/images/brooke-cagle.jpg";
import "./NewsContainer.css";

function NewsContainer() {
  const [newsData] = useState(() => [
    {
      img: NewsImg1,
      name: "Curriculam & Pedagogy",
      desc:
        "We believe that education should take into account everything students experience during each moment of their time at school.",
      link: "#",
    },
    {
      img: NewsImg2,
      name: "Core Academic & Knowledge",
      desc:
        "We believe that education should take into account everything students experience during each moment of their time at school.",
      link: "#",
    },
  ]);
  return (
    <section className="section newsContainer">
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

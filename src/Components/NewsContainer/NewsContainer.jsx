import React from "react";
import News from "./News/News";
import css from "./NewsContainer.module.css";
import faceImg from "../../assets/images/face.jpg";
function NewsContainer() {
  const dummyNews = [
    {
      name: "Rubrik",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque a dolorem quidem reprehenderit.",
      src: faceImg,
      link: "#",
    },
    {
      name: "Rubrik-1",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque a dolorem quidem reprehenderit.",
      src: faceImg,
      link: "#",
    },
    {
      name: "Rubrik-2",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque a dolorem quidem reprehenderit.",
      src: faceImg,
      link: "#",
    },
  ];
  return (
    <section className={css.newsContainer}>
      <h2>Aktuellt</h2>
      <div className={css.newsBlock}>
        {dummyNews.map((news) => (
          <News {...news} key={news.name} />
        ))}
      </div>
    </section>
  );
}

export default NewsContainer;

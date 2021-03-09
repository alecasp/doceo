import React from "react";
import News from "./News/News";
import css from "./NewsContainer.module.css";
function NewsContainer() {
  const dummyNews = [
    {
      name: "Rubrik",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque a dolorem quidem reprehenderit.",

      link: "#",
    },
    {
      name: "Rubrik-1",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque a dolorem quidem reprehenderit.",

      link: "#",
    },
  ];
  return (
    <section className={css.newsContainer}>
      <div className={css.newsBlock}>
        {dummyNews.map((news) => (
          <News {...news} key={news.name} />
        ))}
      </div>
      <button>
        <svg
          width="72"
          height="50"
          viewBox="0 0 72 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d)">
            <path
              d="M34.5251 33.4749C35.892 34.8417 38.108 34.8417 39.4749 33.4749L61.7487 11.201C63.1156 9.83418 63.1156 7.6181 61.7487 6.25126C60.3819 4.88443 58.1658 4.88443 56.799 6.25126L37 26.0503L17.201 6.25126C15.8342 4.88443 13.6181 4.88443 12.2513 6.25126C10.8844 7.6181 10.8844 9.83418 12.2513 11.201L34.5251 33.4749ZM33.5 28V31H40.5V28H33.5Z"
              fill="#578385"
            />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="0.226074"
              y="0.226074"
              width="71.5477"
              height="49.2739"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="-1" dy="5" />
              <feGaussianBlur stdDeviation="5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </button>
    </section>
  );
}

export default NewsContainer;

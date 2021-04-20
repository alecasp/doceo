import React, { useEffect, useRef, useState } from "react";
import News from "./News";
import Loading from "../../../Loading/Loading";
import "./NewsContainer.css";
import { collection } from "../../../../firebase";

function NewsContainer() {
  const [loading, setLoading] = useState(() => true);
  const newsArray = useRef([]);

  useEffect(() => {
    collection
      .orderBy("time", "desc")
      .limit(4)
      .get()
      .then((snapshot) => {
        newsArray.current = snapshot.docs.map((doc, i) => {
          return <News data={doc.data()} key={i} />;
        });
        setLoading(false);
      });
  });

  if (!loading) {
    console.log(newsArray.current);
    return (
      <section className="section newsContainer">
        {newsArray.current.length ? (
          <div className="newsBlock">{newsArray.current}</div>
        ) : (
          <h2 style={{ textAlign: "center" }}>No News</h2>
        )}

        <button>
          <i className="fas fa-angle-down"></i>
        </button>
      </section>
    );
  }
  return <Loading />;
}

export default NewsContainer;

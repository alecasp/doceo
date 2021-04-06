import React from "react";
import { Link } from "react-router-dom";
import "../../Main/Main.css";
import img from "../../../assets/images/face.jpg";
import NewsContainer from "./NewsContainer/NewsContainer";

function Home() {
  return (
    <main className="home">
      <article className="section mission">
        <h2>Our Mission</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quam
          cum quos dolore aliquid saepe minima harum laboriosam molestias
          incidunt totam veritatis, quia, doloribus officia fuga omnis dolores
          excepturi praesentium! quam perspiciatis, dicta in beatae. Voluptas
          vitae rem, molestias, quaerat modi hic deserunt aliquam quis similique
          alias totam.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          tenetur aperiam soluta.
        </p>
      </article>

      <article className="section homeAbout">
        <div className="container">
          <h2>About Us</h2>
          <div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia quam cum quos dolore aliquid saepe minima harum
                laboriosam molestias incidunt totam veritatis, quia, doloribus
                officia fuga omnis dolores excepturi praesentium! quam
                perspiciatis, dicta in beatae. Voluptas vitae rem, molestias,
                quaerat modi hic deserunt aliquam quis similique alias totam.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam tenetur aperiam soluta.
              </p>
              <Link to="/about">LÄS MER</Link>
            </div>
            <div className="images">
              <div>
                <img src={img} alt="" />
              </div>
              <div>
                <img src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </article>
      <NewsContainer />
    </main>
  );
}

export default Home;

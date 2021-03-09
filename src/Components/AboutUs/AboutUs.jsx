import React from "react";
import css from "./AboutUs.module.css";
import img from "../../assets/images/face.jpg";
function AboutUs() {
  return (
    <article className={css.article}>
      <section className={css.mission}>
        <h2>Our Mission</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            quam cum quos dolore aliquid saepe minima harum laboriosam molestias
            incidunt totam veritatis, quia, doloribus officia fuga omnis dolores
            excepturi praesentium! quam perspiciatis, dicta in beatae. Voluptas
            vitae rem, molestias, quaerat modi hic deserunt aliquam quis
            similique alias totam.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            tenetur aperiam soluta.
          </p>
        </div>
      </section>
      <section className={css.about}>
        <h2>About Us</h2>
        <div className={css.about_inner}>
          <div className={css.text}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              quam cum quos dolore aliquid saepe minima harum laboriosam
              molestias incidunt totam veritatis, quia, doloribus officia fuga
              omnis dolores excepturi praesentium! quam perspiciatis, dicta in
              beatae. Voluptas vitae rem, molestias, quaerat modi hic deserunt
              aliquam quis similique alias totam.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam tenetur aperiam soluta.
            </p>
            <a href="#">LÄS MER</a>
          </div>
          <div className={css.images}>
            <div className={css.imgbox}>
              <img src={img} alt="" />
            </div>
            <div className={css.imgbox}>
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

export default AboutUs;

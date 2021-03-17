import React from "react";
import img from "../../../assets/images/handshake.png";
import "../../Main/Main.css";

function AboutUs() {
  return (
    <main className="aboutus">
      <article className="container section">
        <h2>About Us</h2>
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
          tenetur aperiam soluta. cum quos dolore aliquid saepe minima harum
          laboriosam molestias incidunt totam veritatis, quia, doloribus officia
          fuga omnis dolores excepturi praesentium! quam perspiciatis, dicta in
          beatae. Voluptas vitae rem, molestias, quaerat modi hic deserunt
          aliquam quis similique alias totam.
        </p>
      </article>

      <article className="quote">
        <blockquote>
          “This is a quote spanning over two sentences. Its purpose is to catch
          your attention.”
        </blockquote>
        <img src={img} alt="" />
      </article>

      <article className="container section">
        <h2>OUR Expertise</h2>
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
          tenetur aperiam soluta. cum quos dolore aliquid saepe minima harum
          laboriosam molestias incidunt totam veritatis, quia, doloribus officia
          fuga omnis dolores excepturi praesentium! quam perspiciatis, dicta in
          beatae. Voluptas vitae rem, molestias, quaerat modi hic deserunt
          aliquam quis similique alias totam.
        </p>

        <div className="reasons">
          <div className="reason">
            <h3>Reason 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, in
              dolor, nec orci. Sapien, ut cras in risus nibh nunc. Non, elit
              habitasse nisl convallis molestie auctor.
            </p>
          </div>
          <div className="reason">
            <h3>Reason 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, in
              dolor, nec orci. Sapien, ut cras in risus nibh nunc. Non, elit
              habitasse nisl convallis molestie auctor.
            </p>
          </div>
          <div className="reason">
            <h3>Reason 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, in
              dolor, nec orci. Sapien, ut cras in risus nibh nunc. Non, elit
              habitasse nisl convallis molestie auctor.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}

export default AboutUs;

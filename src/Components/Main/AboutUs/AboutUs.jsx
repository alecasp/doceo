import React from "react";
import img from "../../../assets/images/handshake.png";
import workerImg1 from "../../../assets/images/Bat-Man.jpg";
import workerImg2 from "../../../assets/images/brooke-cagle.jpg";
import workerImg3 from "../../../assets/images/bruce-mars.jpg";
import workerImg4 from "../../../assets/images/christin-hume.jpg";
import "../../Main/Main.css";

function AboutUs() {
  const workers = [
    {
      img: workerImg1,
      name: "Worker 1",
      email: "worker1@mail.com",
      status: "Digital Strat",
      phone: "0123-456-789",
    },
    {
      img: workerImg2,
      name: "Worker 2",
      email: "worker2@mail.com",
      status: "Coder",
      phone: "0123-456-789",
    },
    {
      img: workerImg3,
      name: "Worker 3",
      email: "worker3@mail.com",
      status: "Programmer",
      phone: "0123-456-789",
    },
    {
      img: workerImg4,
      name: "Worker 4",
      email: "worker4@mail.com",
      status: "Developer",
      phone: "0123-456-789",
    },
  ];

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

        <div className="workers">
          {workers.map((worker) => (
            <div className="worker" key={worker.email}>
              <div className="imgbox">
                <img src={worker.img} alt="worker-figure" />
              </div>
              <h3>{worker.name}</h3>
              <span>{worker.status}</span>
              <span>{worker.email}</span>
              <span>{worker.phone}</span>
            </div>
          ))}
        </div>
      </article>
    </main>
  );
}

export default AboutUs;

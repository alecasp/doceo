import React from "react";
import "./SplitLeft.css";

function SplitLeft() {
  return (
    <main>
      <article className="container section left">
        <h2>LEFT</h2>
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
        <div className="steps ">
          <div className="step">
            <span>1</span>
            <h4>Step 1</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aliquid, iste.
            </p>
          </div>

          <div className="step">
            <span>2</span>
            <h4>Step 2</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aliquid, iste.
            </p>
          </div>

          <div className="step">
            <span>3</span>
            <h4>Step 3</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aliquid, iste.
            </p>
          </div>

          <div className="step">
            <span>4</span>
            <h4>Step 4</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aliquid, iste.
            </p>
          </div>

          <div className="step">
            <span>5</span>
            <h4>Step 5</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aliquid, iste.
            </p>
          </div>
        </div>

        <form action="#" className="form">
          <input type="text" name="name" id="name" placeholder="Name" />
          <input type="email" name="email" id="email" placeholder="E-mail" />
          <input type="number" name="phone" id="phone" placeholder="Phone" />
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Company"
          />
          <div>
            <button>SEND</button>
          </div>
        </form>
      </article>
    </main>
  );
}

export default SplitLeft;

import React from "react";
import css from "./Footer.module.css";
import logo from "../../assets/images/face.jpg";
function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.footerContainer}>
        <div className={css.contact}>
          <h3>Contact us</h3>
          <p>
            <i class="fa fa-phone" aria-hidden="true"></i>
            <span>+46 123 456 78 90</span>
          </p>
          <p>
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <span>info@mail.se</span>
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i>
            <span>Street 1, 222 33 City</span>
          </p>
        </div>
        <div className={css.follow}>
          <h3>Follow us</h3>
          <div className={css.icons}>
            <a href="#" className="shadow">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="#" className="shadow">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="#" className="shadow">
              <i class="fab fa-twitter-square"></i>
            </a>
            <a href="#" className="shadow">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="contact">
          <h3>Contact us</h3>
          <p>
            <i className="fa fa-phone" aria-hidden="true"></i>
            <span>+46 123 456 78 90</span>
          </p>
          <p>
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <span>info@mail.se</span>
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i>
            <span>Street 1, 222 33 City</span>
          </p>
        </div>
        <div className="follow">
          <h3>Follow us</h3>
          <div className="icons">
            <Link to="" className="shadow">
              <i className="fab fa-facebook-square"></i>
            </Link>
            <Link to="" className="shadow">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link to="" className="shadow">
              <i className="fab fa-twitter-square"></i>
            </Link>
            <Link to="" className="shadow">
              <i className="fab fa-youtube"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

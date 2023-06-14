import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best
          vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-links-items">
            <h2>Socials</h2>
            <Link to="https://github.com/ejosborn">
              My GitHub
            </Link>
            <Link to="https://www.linkedin.com/in/ellis-osborn/">
              My LinkedIn
            </Link>
            <Link to="https://profile.indeed.com/">
              My Indeed
            </Link>
            <Link to="/About-Me">My GitHub</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

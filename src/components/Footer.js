import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-links-items">
            <h2>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Socials
            </h2>
            <section className="social-media">
              <div className="social-media-wrap">
                <div className="social-icons">
                  <Link
                    className="social-icon-link github"
                    to="/"
                    target="_blank"
                    aria-label="Github"
                  >
                    <i className="fa-brands fa-square-github" />
                  </Link>

                  <Link
                    className="social-icon-link linkedIn"
                    to="/"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <i class="fa-brands fa-linkedin"></i>
                  </Link>

                  <Link
                    className="social-icon-link indeed"
                    to="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-menu-homepage&_ga=2.80985751.1079350815.1686765695-1087405970.1686765695"
                    target="_blank"
                    aria-label="Indeed"
                  >
                    <i class="fa-solid fa-info"></i>
                  </Link>

                  <Link
                    className="social-icon-link github"
                    to="/"
                    target="_blank"
                    aria-label="Github"
                  >
                    <i className="fa-brands fa-square-github" />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

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
              &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Socials
            </h2>
            <section className="social-media">
              <div className="social-media-wrap">
                <div className="social-icons">
                  <Link
                    className="social-icon-link github"
                    to="https://github.com/ejosborn"
                    target="_blank"
                    aria-label="Github"
                  >
                    <i className="fa-brands fa-square-github" />
                  </Link>

                  <Link
                    className="social-icon-link linkedIn"
                    to="https://www.linkedin.com/in/ellis-osborn/"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <i class="fa-brands fa-linkedin"></i>
                  </Link>

                  <Link
                    className="social-icon-link indeed"
                    to="https://twitter.com/EllisjOsborn/"
                    target="_blank"
                    aria-label="Twitter"
                  >
                    <i class="fab fa-twitter"></i>
                  </Link>

                  <Link
                    className="social-icon-link github"
                    to="https://www.instagram.com/ellisosborn_/"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <i className="fa-brands fa-instagram" />
                  </Link>
                </div>
              </div>
              <small class="website-rights">
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                Ellis Osborn © 2023
              </small>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

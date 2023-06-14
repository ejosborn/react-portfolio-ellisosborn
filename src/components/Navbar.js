import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  //reverses value when clicked
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Name and Logo at Top left */}
          <Link to="/" className="navbar-logo">
            TRVL <i className="fab fa-typo3" />
          </Link>

          {/* Hamburger Icon */}
          <div className="menu-icon" onClick={handleClick}>
            <i
              className={click ? "fas fa-times" : "fas fa-bars"}
            />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* Home Page */}
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>

            {/* Resume Page */}
            <li className="nav-item">
              <Link
                to="/Resume"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Resume
              </Link>
            </li>

            {/* Projects Page */}
            <li className="nav-item">
              <Link
                to="/Projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>

            {/* Contact Page */}
            <li>
              <Link
                to="/Contact-me"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contact Me
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline">
              Contact Me
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  //reverses value when clicked
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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

            {/* Home Page */}
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

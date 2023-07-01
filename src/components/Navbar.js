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
          <Link
            to="/"
            className="navbar-name"
            onClick={closeMobileMenu}
          >
            Ellis Osborn
          </Link>
          {/* Hamburger Icon */}
          <div className="menu-icon" onClick={handleClick}>
            <i
              className={
                click ? "fas fa-times" : "fas fa-bars"
              }
            />
          </div>
          <ul
            className={
              click ? "nav-menu active" : "nav-menu"
            }
          >
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
                to="/Experience"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Experience
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
            <li className="nav-item">
              <Link
                to="/Contact-Me"
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

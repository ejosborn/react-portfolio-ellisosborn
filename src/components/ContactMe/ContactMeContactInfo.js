import React from "react";
import "./ContactMeContactInfo.css";

function ContactMeContactInfo() {
  return (
    <div className="contact-me">
      <h1>Contact Me!</h1>
      <div className="contact-me__container">
        <div className="contact-me__wrapper">
          <div className="contact-me-writing">
            <h1>Ellis Osborn</h1>
            <br />
            <p>The best way to reach me is at:</p>
            <a href="mailto:ellisosborn00@gmail.com">
              ellisosborn00@gmail.com
            </a>
            <p>
              You can also connect and message me at my
              LinkedIn:
            </p>
            <a href="https://www.linkedin.com/in/ellis-osborn/">
              https://www.linkedin.com/in/ellis-osborn/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMeContactInfo;

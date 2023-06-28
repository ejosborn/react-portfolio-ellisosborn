import React from "react";
import "./ExperienceIntro.css";
import { Button } from "../Button";

function ExperienceIntro() {
  return (
    <div className="experience-intro">
      <div className="experience-intro__bio">
        <h1>About Me</h1>
        <div className="experience-intro__container">
          <div className="experience-intro__wrapper">
            <div className="experience-intro__content">
              <div className="experience-intro__bio-experience">
                <h2>Experience</h2>
                <p>Something</p>
              </div>
              <div className="experience-intro__bio-education">
                <h2>Education</h2>
                <p>
                  I received a BS in Computer Science with a
                  concentration in Software Engineering
                </p>
              </div>
              <div className="experience-intro__bio-interests">
                <h2>Interests</h2>
                <p>I am interested in</p>
              </div>
            </div>
            <div className="experience-intro__resume">
              <a href="/Resume.pdf">See My Resume</a>
              <br />
              <Button
                className="btns"
                buttonStyle="btn--secondary"
                buttonSize="btn--large"
              >
                See Projects I have worked on!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceIntro;

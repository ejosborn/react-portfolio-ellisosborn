import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="about-me">
      <h1>About Me</h1>
      <div className="about-me__container">
        <div className="about-me__wrapper">
          <div className="about-me-writing">
            <img
              src="images/img-profilepic.jpg"
              alt="picOfMe"
            />
            <p>
              Hi, I'm Ellis! I'm a 23 year old recent
              college graduate currently living in Phoenix,
              Arizona, but soon moving out to Los Angeles,
              California. I first got into coding after
              watching a friend create his own website and
              thinking that I could do better (I soon
              realized I could not).
              <br /> <br />
              I enjoy creating pieces of software that help
              me learn what I was not taught in school.
              <br /> <br />
              When I'm not working, you can find me playing
              video games such as Valorant, Rocket League,
              and sometimes smashing my face into a brick
              wall playing Elden Ring.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

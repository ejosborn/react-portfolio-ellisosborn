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
              California. I have always been interested in
              technology, specifically coding, but never
              committed to it because I no experience other
              than an HTML class I had taken in 8th grade
              that I was so lost in, I never wanted to look
              code ever again. That was until I watched a
              youtube video online seeing someone make a
              "Hello World" tutorial in Java and saw how
              easy it could be. Just kidding, what truly
              caught my eye was how code is used for almost
              everything in this world.
              <br /> <br />
              I'm committed to use my education, experience,
              and knowledge to create meaningful software
              for clients or end users. I'm eager to learn
              new concepts and I work well in team
              environments.
              <br /> <br />
              When I'm not working, you can find me playing
              video games such as Valorant and Rocket
              League, playing basketball with friends, or
              going to coffee shops!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

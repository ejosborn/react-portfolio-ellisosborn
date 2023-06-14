import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out the rest of the website!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="Learn More About Me!"
              path="/About-Me"
            />

            <CardItem
              src="images/img-2.jpg"
              text="Here's the latest project I'm working on"
              path="/My-Latest-Project"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Take a look at my resume!"
              path="/Resume"
            />

            <CardItem
              src="images/img-home1.jpg"
              text="Here's the latest project I'm working on"
              path="/Project"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

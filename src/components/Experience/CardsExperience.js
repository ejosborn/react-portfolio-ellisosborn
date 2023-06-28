import React from "react";
import CardItem from "../CardItem";
import "./CardsExperience.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out the rest of the website!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="Learn More About Me! (COMING SOON)"
              path="/More-About-Me"
            />

            <CardItem
              src="images/img-2.jpg"
              text="Here's the latest project I'm working on! (COMING SOON)"
              path="/My-Latest-Project"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

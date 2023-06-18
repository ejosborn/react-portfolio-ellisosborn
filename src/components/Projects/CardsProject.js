import React from "react";
import "./CardsProject.css";
import CardItem from "../CardItem";

function CardsProject() {
  return (
    <div className="cards">
      <h1>Check out some projects I have worked on:</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-capstone.jpg"
              text="Windows App Developement for UAV Fuel Cell System"
              path="/Projects/Project1"
            />

            <CardItem
              src="images/img-instant-messaging-app.jpg"
              text="Instant Messaging Application"
              path="/Projects/Project2"
            />

            <CardItem
              src="images/img-sudoku.jpg"
              text="Sudoku Solver"
              path="/Projects/Project1"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsProject;

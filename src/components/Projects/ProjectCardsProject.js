import React from "react";
import "./ProjectCardsProject.css";
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
              text="Windows App Development for UAV Fuel Cell System"
              language="Language: C#"
              framework="Framework: Xamarin"
              path="https://github.com/IMSkidmore/FinalCapstone"
            />

            <CardItem
              src="images/img-instant-messaging-app.jpg"
              text="Instant Messaging Application"
              language="Language: JavaScript, HTML, SQL"
              framework="Framework: React"
              path="https://github.com/ejosborn/Instant-Messaging-Application"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-sudoku.jpg"
              text="Sudoku Solver"
              language="Language: Python"
              path="https://github.com/ejosborn/Sudoku-Solver"
            />
            <CardItem
              src="images/img-restapi-project.jpg"
              text="Sudoku Solver"
              language="Language: C#"
              framework="Framework: ASP.NET"
              path="https://github.com/ejosborn/RESTAPI-TRYIT-PAGE"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsProject;

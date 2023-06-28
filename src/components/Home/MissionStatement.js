import React from "react";
import "./MissionStatement.css";

function MissionStatement() {
  return (
    <div className="mission-statement">
      <h1>Mission Statement</h1>
      <div className="mission-statment__container">
        <div className="mission-statement__wrapper">
          <div className="mission-statement-writing">
            <p>
              <br />
              &emsp;My personal mission is to use my education in
              computer science to improve
              {/* My personal mission in the field of computer
              science is to leverage technology to empower
              individuals and transform the world around us. I am
              driven by the belief that computer science has the
              potential to revolutionize industries, improve
              lives, and create innovative solutions to complex
              challenges. Through my work, I strive to push the
              boundaries of what is possible, driving progress
              and shaping the future. */}
              <br />
              <br />
              &emsp;
              {/* With a deep passion for problem-solving and
              innovation, I am committed to applying my skills
              and knowledge in computer science to tackle
              real-world issues. I aspire to develop cutting-edge
              software applications, harness data-driven
              insights, and contribute to advancements in
              artificial intelligence and machine learning. I am
              dedicated to building robust and secure systems
              that prioritize user experience, privacy, and
              ethical considerations. By continuously learning
              and staying at the forefront of technological
              advancements, I aim to make a lasting impact in the
              realm of computer science, fostering positive
              change and improving the lives of individuals and
              communities globally. */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionStatement;

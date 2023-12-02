import React from "react";
import "./ExperienceIntro.css";
import { Button } from "../Button";

function ExperienceIntro() {
  return (
    <div className="experience-intro">
      <div className="experience-intro__bio">
        <h1>Experience</h1>
        <div className="experience-intro__container">
          <div className="experience-intro__wrapper">
            <div className="experience-intro__content">
              <div className="experience-intro__bio-experience">
                <h2>Experience</h2>
                {/* Experience 1 */}
                <h5>
                  Army Reserves(MOS: 35S) Signals Collection
                  Analyst
                </h5>
                <p>November 2017 - October 2023</p>
                <p>
                  &nbsp;&nbsp;&nbsp;- Top Secret Clearance -
                  TS/SCI
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;- Responsible for detection, 
                  acquisition, location, and identification of 
                  foreign electronic intelligence
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;- Trained in exploiting 
                  non-voice communications and other electronic 
                  signals to provide strategic/tactical intelligence
                </p>
                <br />

                {/* Experience 2 */}
                <h5>
                  Wave Plumbing -- IT and Online Sales
                  Coordinator
                </h5>
                <p>January 2020 - July 2023</p>
                <p>
                  &nbsp;&nbsp;&nbsp;- Troubleshoot software
                  and structural technological issues for a
                  private business
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;- Perform computer
                  literacy education to employees
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;- Implemented online
                  vendor and social media presence
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;- Facilitated the
                  transition to online platforms during the
                  COVID-19 pandemic
                </p>
                <br />

                {/* Experience 3 */}
                <h5>Best Buy -- Sales Consultant</h5>
                <p>August 2022 - September 2023</p>
                <p>
                  &nbsp;&nbsp;&nbsp;- Consult with customers
                  to find best technology solutions for
                  their needs
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;- Responsible for sales
                  in computer-based products department and
                  home theater/home audio department
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;- Develop, maintain, and
                  communicate strong, up-to-date knowledge
                  of products and accessories
                </p>
                <br />
              </div>
              <div className="experience-intro__bio-education">
                <h2>Education</h2>
                <p>
                  I received a B.S in Computer Science with
                  a concentration in Software Engineering.
                  Throughout my education at Arizona State
                  University, I learned OOP languages such
                  as: Java, Python, C++, and C, data
                  structures and algorithms, and had
                  introductions to theoretical computer
                  science, cybersecurity, and data science.
                  Critically thinking to come up with
                  solutions has been one of the most
                  prominent skills that I have learned
                  throughout my education.
                  <br />
                  <br />
                  With my concentration in Software
                  Engineering, I expanded my knowledge
                  through specialized coursework such as
                  database management and development,
                  service-oriented computing, software
                  quality assurance testing, software
                  analysis, design, and architecture, and
                  the product lifecycle.
                </p>
                <br />
              </div>
              <div className="experience-intro__bio-interests">
                <h2>Interests</h2>
                <p>
                  I am interested in joining the field as an 
                  entry level fullstack or backend developer, but 
                  I welcome all other opportunities. Some other 
                  opportunities I'd be interested in exploring 
                  are Quality Assurance testing and database administration.
                </p>
                <br />
              </div>
            </div>
            <div className="experience-intro__resume">
              <a href="/Resume.pdf" target="_blank">
                See My Resume
              </a>
              <br />
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

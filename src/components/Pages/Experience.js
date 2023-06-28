import React from "react";
import "../../App.css";
import { useEffect } from "react";
import ExperienceIntro from "../Experience/ExperienceIntro";
import CardsExperience from "../Experience/CardsExperience";
import Footer from "../Footer";

export default function Experience() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <ExperienceIntro />
      <CardsExperience />
      <Footer />
    </>
  );
}

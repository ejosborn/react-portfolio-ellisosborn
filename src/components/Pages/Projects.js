import ProjectsIntro from "../Projects/ProjectsIntro";
import Footer from "../Footer";
import ProjectCardsProject from "../Projects/ProjectCardsProject";
import CardsProject from "../Projects/ProjectCardsProject";
import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <ProjectCardsProject />
      <ProjectsIntro />
      <CardsProject />
      <Footer />
    </>
  );
}

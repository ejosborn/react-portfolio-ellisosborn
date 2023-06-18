import VideoSectionProjects from "../Projects/VideoSectionProjects";
import ProjectsIntro from "../Projects/ProjectsIntro";
import Footer from "../Footer";
import CardsProject from "../Projects/CardsProject";
import { useEffect } from "react";
export default function Projects() {
  useEffect(() => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <VideoSectionProjects />
      <ProjectsIntro />
      <CardsProject />
      <Footer />
    </>
  );
}

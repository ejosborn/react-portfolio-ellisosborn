import VideoSectionHome from "../Home/VideoSectionHome";
import CardsHome from "../Home/CardsHome";
import AboutMe from "../Home/AboutMe";
import Footer from "../Footer";
import MissionStatement from "../Home/MissionStatement";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <VideoSectionHome />
      <AboutMe />
      <MissionStatement />
      <CardsHome />
      <Footer />
    </>
  );
}

export default Home;

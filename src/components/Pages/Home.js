import VideoSectionHome from "../Home/VideoSectionHome";
import CardsHome from "../Home/CardsHome";
import AboutMe from "../Home/AboutMe";
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
      <CardsHome />
    </>
  );
}

export default Home;

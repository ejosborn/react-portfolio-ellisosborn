import VideoSectionMoreAboutMe from "../MoreAboutMe/VideoSectionMoreAboutMe";
import { useEffect } from "react";

function MoreAboutMe() {
  useEffect(() => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <VideoSectionMoreAboutMe />
    </>
  );
}

export default MoreAboutMe;

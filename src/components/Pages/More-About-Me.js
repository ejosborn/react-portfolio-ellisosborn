import VideoSectionMoreAboutMe from "../MoreAboutMe/VideoSectionMoreAboutMe";
import { useEffect } from "react";

function MoreAboutMe() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
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

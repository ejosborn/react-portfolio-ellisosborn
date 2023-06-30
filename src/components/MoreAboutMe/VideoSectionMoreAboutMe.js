import React from "react";
import "../../App.css";
import "./VideoSectionMoreAboutMe.css";

function VideoSectionMoreAboutMe() {
  return (
    <div className="video-container">
      <video
        src="/videos/boogie-boarding.mp4"
        autoPlay
        loop
        muted
      />
      <h1>
        More About Me! <br /> (COMING SOON)
      </h1>
    </div>
  );
}

export default VideoSectionMoreAboutMe;

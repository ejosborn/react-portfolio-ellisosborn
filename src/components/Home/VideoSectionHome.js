import React from "react";
import "../../App.css";
import "./VideoSectionHome.css";

function VideoSection() {
  return (
    <div className="video-container">
      <video
        src="/videos/nav-video1.mp4"
        autoPlay
        loop
        muted
      />
      <h1>Welcome to My Website</h1>
    </div>
  );
}

export default VideoSection;

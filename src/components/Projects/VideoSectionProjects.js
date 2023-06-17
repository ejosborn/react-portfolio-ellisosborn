import React from "react";
import "../../App.css";
import "./VideoSectionProjects.css";

function VideoSection() {
  return (
    <div className="video-container">
      <video src="/videos/nav-video1.mp4" autoPlay loop muted />
      <h1>Projects</h1>
    </div>
  );
}

export default VideoSection;
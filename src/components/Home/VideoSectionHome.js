import React from "react";
import "../../App.css";
import { Button } from "../Button";
import "./VideoSectionHome.css";

function VideoSection() {
  return (
    <div className="video-container">
      <video src="/videos/nav-video1.mp4" autoPlay loop muted />
      <h1>Welcome to The Website</h1>
      <p>Ellis Osborn</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          About Me! <i class="fa-light fa-user-astronaut"></i>
        </Button>
      </div>
    </div>
  );
}

export default VideoSection;

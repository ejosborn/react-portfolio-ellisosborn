import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./VideoSection.css";

function VideoSection() {
  return (
    <div className="video-container">
      <video src="/videos/nav-video1.mp4" autoPlay loop muted />
      <h1>Welcome to The Website</h1>
      <p>Ellis Osborn</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default VideoSection;

import React from "react";
import "../../App.css";
import { useEffect } from "react";

export default function Resume() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return <h1 className="resume">Resume</h1>;
}

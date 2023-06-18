import React from "react";
import "../../App.css";
import { useEffect } from "react";

export default function Resume() {
  useEffect(() => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  }, []);

  return <h1 className="resume">Resume</h1>;
}

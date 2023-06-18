import { useEffect } from "react";
import "../../App.css";

export default function AboutMe() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return <h1 className="about-me">About Me</h1>;
}

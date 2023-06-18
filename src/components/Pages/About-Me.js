import { useEffect } from "react";
import "../../App.css";

export default function AboutMe() {
  useEffect(() => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  return <h1 className="about-me">About Me</h1>;
}

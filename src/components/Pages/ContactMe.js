import { useEffect } from "react";
import "../../App.css";

export default function ContactMe() {
  useEffect(() => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  return <h1 className="contact-me">Contact Me!</h1>;
}

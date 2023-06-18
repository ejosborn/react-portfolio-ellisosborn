import { useEffect } from "react";
import "../../App.css";

export default function ContactMe() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return <h1 className="contact-me">Contact Me!</h1>;
}

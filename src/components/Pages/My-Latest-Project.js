import React from "react";
import "../../App.css";
import { useEffect } from "react";

export default function MyLatestProject() {
  useEffect(() => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  return (
    <h1 className="my-latest-project">My Latest Project</h1>
  );
}

import React from "react";
import { useEffect } from "react";
import "../ContactMe/CardsContactMe.css";
import ContactMeContactInfo from "../ContactMe/ContactMeContactInfo";
import CardsHome from "../Home/CardsHome";

export default function ContactMe() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <ContactMeContactInfo />
      <CardsHome />
    </>
  );
}

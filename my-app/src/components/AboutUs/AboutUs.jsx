import React from "react";
import AboutText from "./AboutText";
import People from "../../assets/People.jpg";

const AboutUs = () => {
  return (
    <div className="aboutUs" id="abautUs">
      <AboutText />
      <img className="aboutUs__img" src={People} alt="People" />
    </div>
  );
};

export default AboutUs;

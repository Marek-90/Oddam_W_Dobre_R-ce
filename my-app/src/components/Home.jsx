import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import Statistics from "./Statistics/Statistics";
import Steps from "./Steps/Steps";
import AboutUs from "./AboutUs/AboutUs";
import WhoWeHelp from "./WhoWeHelp/WhoWeHelp";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <>
      <Header />
      <Statistics />
      <Steps />
      <AboutUs />
      <WhoWeHelp />
      <Contact />
    </>
  );
};

export default Home;

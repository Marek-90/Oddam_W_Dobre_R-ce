import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header/Header";
import Statistics from "./Statistics/Statistics";
import Steps from "./Steps/Steps";
import AboutUs from "./AboutUs/AboutUs";

const Home = () => {
  return (
    <>
      <Header />
      <Statistics />
      <Steps />
      <AboutUs />
    </>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import Icon3 from "../../assets/Icon-3.svg";

const StepThree = () => {
  return (
    <>
      <Link to="/logowanie" className="stepOne">
        <img src={Icon3} alt="icon3" />
        <p className="step__title">
          <p>Zdecyduj komu</p>
          <p> chcesz pomóc</p>
        </p>
        <p>wybierz zaufane</p>
        <p>miejsce</p>
      </Link>
    </>
  );
};
export default StepThree;

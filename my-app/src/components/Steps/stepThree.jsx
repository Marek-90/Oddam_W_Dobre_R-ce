import React from "react";
import { Link } from "react-router-dom";
import Icon3 from "../../assets/Icon-3.svg";

const StepThree = () => {
  return (
    <>
      <Link to="/logowanie" className="stepOne">
        <img className="step__img-size" src={Icon3} alt="icon3" />
        <div className="step__title">
          <p>Zdecyduj komu</p>
          <p> chcesz pomóc</p>
        </div>
        <p>wybierz zaufane</p>
        <p>miejsce</p>
      </Link>
    </>
  );
};

export default StepThree;

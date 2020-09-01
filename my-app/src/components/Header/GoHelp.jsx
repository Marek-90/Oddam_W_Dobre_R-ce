import React from "react";
import { Link } from "react-router-dom";
import Decoration from "../../assets/Decoration.svg";

const GoHelp = () => {
  return (
    <div className="goHelp">
      <div className="goHelp__position">
        <p>Zacznij pomagać!</p>
        <p>Oddaj niechciane rzeczy w zaufane ręce</p>
        <img className="goHelp__img" src={Decoration} alt="Decoration" />
      </div>
      <div className="goHelp__btn">
        <Link className="goHelp__btn-style">
          <p>ODDAJ</p>
          <p>RZECZY</p>
        </Link>
        <Link className="goHelp__btn-style">ZORGANIZUJ ZBIÓRKĘ</Link>
      </div>
    </div>
  );
};

export default GoHelp;

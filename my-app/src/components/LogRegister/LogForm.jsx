import React from "react";
import { Link } from "react-router-dom";
import LogFormInput from "./LogFormInput";
import Decoration from "../../assets/Decoration.svg";

const LogForm = () => {
  return (
    <div className="logForm">
      <h1 className="logForm__title">Zaloguj się</h1>
      <img className="goHelp__img" src={Decoration} alt="Decoration" />
      <LogFormInput />
      <div>
        <div className="logForm__btn">
          <Link to="rejestracja">Załóż konto</Link>
          <button>Zaloguj się</button>
        </div>
      </div>
    </div>
  );
};

export default LogForm;

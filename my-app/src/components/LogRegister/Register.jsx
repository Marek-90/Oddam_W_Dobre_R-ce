import React from "react";
import { Link } from "react-router-dom";
import RegisterInput from "./RegisterInput";
import Decoration from "../../assets/Decoration.svg";

const Register = () => {
  return (
    <div className="logForm">
      <h1 className="logForm__title">Załóż konto</h1>
      <img className="goHelp__img" src={Decoration} alt="Decoration" />
      <RegisterInput />
      <div>
        <div className="logForm__btn">
          <Link to="/logowanie">Zaloguj się</Link>
          <button>Załóż konto</button>
        </div>
      </div>
    </div>
  );
};

export default Register;

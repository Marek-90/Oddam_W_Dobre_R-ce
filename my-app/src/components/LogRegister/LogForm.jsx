import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogFormInput from "./LogFormInput";
import Decoration from "../../assets/Decoration.svg";

const LogForm = () => {
  const [logEmailError, setlogEmailError] = useState(null);
  const [logPasswordError, setLogPasswordError] = useState(null);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const supportEmail = (data) => {
    setlogEmailError(null);
    if (!data.email) {
      return "E-mail nieprawidłowy";
    }
  };

  const supportPassword = (data) => {
    setLogPasswordError(null);
    if (!data.password) {
      return "Nieprawdiłowy email lub hasło";
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    const errorEmailS = supportEmail(data);
    const errorPasswordS = supportPassword(data);

    if (errorEmailS) {
      setlogEmailError(errorEmailS);
    }

    if (errorPasswordS) {
      setLogPasswordError(errorPasswordS);
    }
  };

  return (
    <form onSubmit={handlerSubmit} className="logForm">
      <h1 className="logForm__title">Zaloguj się</h1>
      <img className="goHelp__img" src={Decoration} alt="Decoration" />
      <LogFormInput
        logEmailError={logEmailError}
        logPasswordError={logPasswordError}
      />
      <div>
        <div className="logForm__btn">
          <button onSubmit>Zaloguj się</button>
          <Link to="/rejestracja">Załóż konto</Link>
        </div>
      </div>
    </form>
  );
};

export default LogForm;

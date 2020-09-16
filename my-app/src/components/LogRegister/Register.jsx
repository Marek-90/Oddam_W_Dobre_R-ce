import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegisterInput from "./RegisterInput";
import Decoration from "../../assets/Decoration.svg";

const Register = () => {
  const [registerErrorEmail, setRegisterErrorEmail] = useState(null);
  const [data, setData] = useState({
    email: "",
    password: "",
    repPassword: "",
  });

  const reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const supportRegisterError = (data) => {
    setRegisterErrorEmail(null);
    if (!data.email) {
      return "Podaj email";
    } else if (!reg.test(data.email)) {
      return "Niepoprawny e-mail";
    }
    return null;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("dupa");
    console.log(data);

    const supportRegisterErrorS = supportRegisterError(data);

    if (supportRegisterErrorS) {
      supportRegisterError(supportRegisterErrorS);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="logForm">
      <h1 className="logForm__title">Załóż konto</h1>
      <img className="goHelp__img" src={Decoration} alt="Decoration" />
      <RegisterInput registerErrorEmail={registerErrorEmail} />
      <div>
        <div className="logForm__btn">
          <Link to="/logowanie">Zaloguj się</Link>
          <button>Załóż konto</button>
        </div>
      </div>
    </form>
  );
};

export default Register;

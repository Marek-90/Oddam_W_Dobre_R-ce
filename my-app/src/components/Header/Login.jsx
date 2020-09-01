import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <ul className="login">
        <Link to="/logowanie" className="login__log">
          <li>Zaloguj</li>
        </Link>
        <Link to="/rejestracja" className="login__log">
          <li>Załóż konto</li>
        </Link>
      </ul>
    </div>
  );
};
export default Login;

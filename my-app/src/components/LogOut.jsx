import React from "react";
import { Link } from "react-router-dom";
import Login from "./Header/Login";
import Navigation from "./Header/Navigation";
import Decoration from "../assets/Decoration.svg";

const LogOut = () => {
  return (
    <>
      <div className="navLog">
        <Login />
        <Navigation />
      </div>
      <div className="logOut">
        <h1 className="logOut__title">Wylogowanie nastąpiło pomyślnie!</h1>
        <img className="goHelp__img" src={Decoration} alt="Decoration" />
        <Link to="/" className="logOut__btn">
          Strona główna
        </Link>
      </div>
    </>
  );
};

export default LogOut;

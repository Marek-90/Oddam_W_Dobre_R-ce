import React from "react";
import Person from "./Person";
import Message from "./Message";
import Decoration from "../../assets/Decoration.svg";

const ContactForm = () => {
  return (
    <div className="contactForm">
      <h2>Skontaktuj się z nami</h2>
      <img className="goHelp__img" src={Decoration} alt="Decoration" />
      <Person />
      <Message />
      <div className="contact__btn-position">
        <button className="contact__btn">Wyślij</button>
      </div>
    </div>
  );
};
export default ContactForm;

import React, { useState } from "react";
import Person from "./Person";
import Message from "./Message";
import Decoration from "../../assets/Decoration.svg";

const ContactForm = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const updateFieled = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("dupa", data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="contactForm">
        <h2>Skontaktuj się z nami</h2>
        <img className="goHelp__img" src={Decoration} alt="Decoration" />
        <Person updateFieled={updateFieled} />
        <Message updateFieled={updateFieled} />
        <div className="contact__btn-position">
          <button className="contact__btn">Wyślij</button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

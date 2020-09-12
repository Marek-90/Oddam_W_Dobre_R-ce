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

  const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;

  const validateName = (data) => {
    if (!data.name) {
      return "Imię jest wymagane";
    } else if (data.name.length < 2) {
      return "Imię jest za krótkie";
    }
    return null;
  };

  const validateEmail = (data) => {
    if (!data.email) {
      return "E-mail jest wymagany";
    } else if (!reg.test(data.email)) {
      return "Zły e-mail";
    }
    return null;
  };

  const validateMessage = (data) => {
    if (!data.message) {
      return "Brak wiadomości";
    } else if (data.message.length < 120) {
      return "Wiadomość jest za krótka";
    }
    return null;
  };

  const updateFieled = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorName = validateName(data);
    const errorEmail = validateEmail(data);
    const errorMsg = validateMessage(data);
    if (errorName) {
      setError(errorName);
      console.log("blad");
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contactForm">
      <h2>Skontaktuj się z nami</h2>
      <img className="goHelp__img" src={Decoration} alt="Decoration" />
      <Person updateFieled={updateFieled} error={error} />
      <Message updateFieled={updateFieled} error={error} />
      <div className="contact__btn-position">
        <button className="contact__btn">Wyślij</button>
      </div>
    </form>
  );
};

export default ContactForm;

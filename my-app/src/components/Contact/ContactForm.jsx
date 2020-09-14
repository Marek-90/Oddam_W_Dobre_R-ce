import React, { useState } from "react";
import Person from "./Person";
import Message from "./Message";
import Decoration from "../../assets/Decoration.svg";

const ContactForm = () => {
  const [errorName, setErrorName] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [formCom, setFormCom] = useState(null);
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const validateName = (data) => {
    setErrorName(null);
    if (!data.name) {
      return "Imię jest wymagane";
    } else if (data.name.length < 2) {
      return "Imię jest za krótkie";
    }
    return null;
  };

  const validateEmail = (data) => {
    setErrorEmail(null);
    if (!data.email) {
      return "E-mail jest wymagany";
    } else if (!reg.test(data.email)) {
      return "Niepoprawny e-mail";
    }
    return null;
  };

  const validateMessage = (data) => {
    setErrorMessage(null);
    if (!data.message) {
      return "Wiadomoś jest wymagana";
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

    const errorNameV = validateName(data);
    const errorEmailV = validateEmail(data);
    const errorMsgV = validateMessage(data);

    if (errorNameV) {
      setErrorName(errorNameV);
    }
    if (errorEmailV) {
      setErrorEmail(errorEmailV);
    }
    if (errorMsgV) {
      setErrorMessage(errorMsgV);
    }

    const option = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", option)
      .then((response) => response.json())
      .then((json) => {
        if (json.status === "success") {
          setFormCom("success");
        } else {
          setFormCom("error");
        }
      });
  };

  return (
    <>
      {formCom === "success" ? (
        <div>Dziękujemy za wysłanie formularza</div>
      ) : (
        <form onSubmit={handleSubmit} className="contactForm">
          <h2>Skontaktuj się z nami</h2>
          <img className="goHelp__img" src={Decoration} alt="Decoration" />
          <Person
            updateFieled={updateFieled}
            errorName={errorName}
            errorEmail={errorEmail}
          />
          <Message updateFieled={updateFieled} errorMessage={errorMessage} />
          <div className="contact__btn-position">
            <button className="contact__btn">Wyślij</button>
            {formCom === "error" && <div>Coś poszło nie tak</div>}
          </div>
        </form>
      )}
    </>
  );
};

export default ContactForm;

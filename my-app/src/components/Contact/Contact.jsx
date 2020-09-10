import React from "react";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__back" id="contact">
        <div className="contact__form">
          <ContactForm />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;

import React from "react";

const LogFormInput = () => {
  return (
    <div className="logFormInput">
      <p className="logFormInput__input">Email</p>
      <input type="text" />
      <p className="logFormInput__input">Hasło</p>
      <input type="password" />
    </div>
  );
};

export default LogFormInput;

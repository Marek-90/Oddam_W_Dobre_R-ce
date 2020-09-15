import React, { useState } from "react";

const LogFormInput = ({ logEmailError, logPasswordError }) => {
  return (
    <div className="logFormInput">
      <p className="logFormInput__input">Email</p>
      <input type="text" />
      <p className="errorStyle">{logEmailError}</p>
      <p className="logFormInput__input">Hasło</p>
      <input type="password" />
      <p className="errorStyle">{logPasswordError}</p>
    </div>
  );
};

export default LogFormInput;

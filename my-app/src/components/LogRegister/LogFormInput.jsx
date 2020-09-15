import React, { useState } from "react";

const LogFormInput = ({ logEmailError, logPasswordError }) => {
  return (
    <div className="logFormInput">
      <p className="logFormInput__input">Email</p>
      <input type="text" name="email" required={false} />
      <p className="errorStyle">{logEmailError}</p>
      <p className="logFormInput__input">Hasło</p>
      <input type="password" name="password" />
      <p className="errorStyle">{logPasswordError}</p>
    </div>
  );
};

export default LogFormInput;

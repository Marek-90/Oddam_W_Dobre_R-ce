import React, { useState } from "react";

const LogFormInput = () => {
  const [logEmailError, setlogEmailError] = useState(null);
  const [logPasswordError, setLogPasswordError] = useState(null);

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

import React from "react";

const RegisterInput = () => {
  return (
    <div className="logRegInput">
      <p className="logFormInput__input">Email</p>
      <input type="text" />
      <p className="logFormInput__input">Hasło</p>
      <input type="password" />
      <p className="logFormInput__input">Powtórz hasło</p>
      <input type="password" />
    </div>
  );
};

export default RegisterInput;

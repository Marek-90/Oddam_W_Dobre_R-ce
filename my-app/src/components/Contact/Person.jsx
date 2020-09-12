import React, { useState } from "react";

const Person = ({ updateFieled, errorName, errorEmail }) => {
  return (
    <div className="person">
      <div>
        <p>Wpisz swoje imię</p>
        <input
          onChange={updateFieled}
          type="text"
          name="name"
          placeholder="Krzysztof"
        />
        <div className="errorStyle">{errorName}</div>
      </div>
      <div>
        <p>Wpisz swój email</p>
        <input
          onChange={updateFieled}
          type="text"
          name="email"
          placeholder="abc@xyz.pl"
          required={false}
        />
        <div className="errorStyle">{errorEmail}</div>
      </div>
    </div>
  );
};

export default Person;

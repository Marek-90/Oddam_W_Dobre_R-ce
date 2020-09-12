import React, { useState } from "react";

const Person = ({ updateFieled, error }) => {
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
        <div className="errorStyle">{error}</div>
      </div>
      <div>
        <p>Wpisz swój email</p>
        <input
          onChange={updateFieled}
          type="email"
          name="email"
          placeholder="abc@xyz.pl"
        />
      </div>
    </div>
  );
};

export default Person;

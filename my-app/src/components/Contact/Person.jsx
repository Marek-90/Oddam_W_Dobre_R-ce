import React from "react";

const Person = () => {
  return (
    <div className="person">
      <div>
        <p>Wpisz swoje imię</p>
        <input type="text" placeholder="Krzysztof" />
      </div>
      <div>
        <p>Wpisz swój email</p>
        <input type="text" placeholder="abc@xyz.pl" />
      </div>
    </div>
  );
};

export default Person;

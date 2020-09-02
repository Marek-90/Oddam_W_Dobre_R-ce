import React from "react";

const Person = () => {
  return (
    <div className="person">
      <div>
        <p>Wpisz swoje imię</p>
        <input type="text" />
      </div>
      <div>
        <p>Wpisz swój email</p>
        <input type="text" />
      </div>
    </div>
  );
};

export default Person;

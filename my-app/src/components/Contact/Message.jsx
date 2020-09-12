import React from "react";

const Message = ({ updateFieled, errorMessage }) => {
  return (
    <div className="message__text">
      <p>Wpisz swoją wiadomość</p>
      <textarea
        onChange={updateFieled}
        name="message"
        id=""
        cols="30"
        rows="10"
        placeholder="Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Itaque nesciunt placeat veritatis deserunt voluptatibus. Voluptates aliquid autem 
        sit labore quos consectetur debitis illo perferendis pariatur hic, delectus 
        aperiam provident quaerat quibusdam enim"
      ></textarea>
      <div className="errorStyle">{errorMessage}</div>
    </div>
  );
};

export default Message;

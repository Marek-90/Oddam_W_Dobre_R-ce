import React from "react";

const Message = () => {
  return (
    <div className="message__text">
      <p>Wpisz swoją wiadomość</p>
      <textarea
        name="message"
        id=""
        cols="30"
        rows="10"
        placeholder="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque nesciunt placeat veritatis deserunt voluptatibus. Voluptates aliquid autem sit labore quos consectetur debitis illo perferendis pariatur hic, delectus aperiam provident quaerat quibusdam enim"
      ></textarea>
      {/* <input
        type="text"
        placeholder="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque nesciunt placeat veritatis deserunt voluptatibus. Voluptates aliquid autem sit labore quos consectetur debitis illo perferendis pariatur hic, delectus aperiam provident quaerat quibusdam enim praesentium commodi eius. Vitae ipsam dicta pariatur officiis!"
      /> */}
    </div>
  );
};
export default Message;

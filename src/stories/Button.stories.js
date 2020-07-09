import React from "react";
import Button from "../components/Button";

export default { title: "Button" };

// function Button({ text, clickHandler }) {
//   return <button onClick={clickHandler}>{text}</button>;
// }

export const withText = () => <Button text={"Texty Button"} />;
export const greenAF = () => (
  <Button color={"rgb(35,200,50)"} text={"Green Button"} />
);

import React from "react";
import css from "./Button.module.css";

function Button({ text, clickHandler, color }) {
  return (
    <button
      style={{ backgroundColor: color }}
      className={css.btn}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
}

export default Button;

import React from "react";
import s from "./Button.module.scss";
import { ButtonType } from "../../Types";

const Button = ({ title, click }: ButtonType) => {
  return (
    <button className={s.button} onClick={click}>
      {title}
    </button>
  );
};

export { Button };

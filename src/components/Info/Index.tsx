import React from "react";
import s from "./Info.module.scss";

const Info = () => {
  return (
    <div className={s.container}>
      <p className={s.text}>
        Choose your favorite countries and cities, create routes, at any
        convenient time
      </p>
    </div>
  );
};

export { Info };

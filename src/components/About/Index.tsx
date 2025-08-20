import React from "react";
import s from "./About.module.scss";

const About = () => {
  return (
    <div>
      <div className={s.container}>
        <p className={s.text}>Wherever you go, we will take you there</p>
      </div>
    </div>
  );
};

export { About };

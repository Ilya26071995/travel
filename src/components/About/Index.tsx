import React from "react";
import s from "./About.module.scss";

const About = () => {
  return (
    <div>
      <div className={s.container}>
        <p className={s.text}>
          Куда бы вы ни отправились, мы вас туда доставим
        </p>
      </div>
    </div>
  );
};

export { About };

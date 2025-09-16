import React from "react";
import s from "./About.module.scss";
import { t } from "i18next";

const About = () => {
  return (
    <div>
      <div className={s.container}>
        <p className={s.text}>{t("about")}</p>
      </div>
    </div>
  );
};

export { About };

import React from "react";
import s from "./Info.module.scss";
import { t } from "i18next";

const Info = () => {
  return (
    <div className={s.container}>
      <p className={s.text}>{t("routes")}</p>
    </div>
  );
};

export { Info };

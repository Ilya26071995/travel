import React from "react";
import s from "./Holiday.module.scss";
import { t } from "i18next";

const Holiday = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>{t("holiday")}</h2>
    </div>
  );
};

export { Holiday };

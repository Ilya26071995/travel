import React from "react";
import s from "./Registration.module.scss";
import { t } from "i18next";
import { Button } from "../Button/Index";

const RegistrationForm = () => {
  return (
    <div className={s.container}>
      <form className={s.form}>
        <h2 className={s.title}>{t("registration")}</h2>
        <label className={s.label}>
          {" "}
          {t("Ymail")}
          <input type="text" className={s.input} placeholder={t("Ymail")} />
        </label>
        <label className={s.label}>
          {" "}
          {t("password")}
          <input type="text" className={s.input} placeholder={t("password")} />
        </label>
        <Button title={t("send")} />
      </form>
    </div>
  );
};

export { RegistrationForm };

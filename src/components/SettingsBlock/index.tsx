import React, { useState } from "react";
import s from "./Settings.module.scss";
import { Button } from "../Button/Index";
import { useTranslation } from "react-i18next";

const SettingsBlock = () => {
  const { t, i18n } = useTranslation();

  const handleLanguage = () => {
    const newLanguage = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className={s.container}>
      <div className={s.miniContainer}>
        <h3 className={s.title}>{t("changeLang")}</h3>
        <Button title={t("change")} click={handleLanguage} />
      </div>
      <div className={s.miniContainer}>
        <h3 className={s.title}>{t("changeTheme")}</h3>
        <Button title={t("change")} />
      </div>
    </div>
  );
};

export { SettingsBlock };

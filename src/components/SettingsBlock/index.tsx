import React, { useState } from "react";
import s from "./Settings.module.scss";
import { Button } from "../Button/Index";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { ThemeState } from "../../Types";
import { toggleTheme } from "../../store/slices/toggleTheme.slice";

const SettingsBlock = () => {
  const { t, i18n } = useTranslation();

  const handleLanguage = () => {
    const newLanguage = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(newLanguage);
  };

  const dispatch = useDispatch();
  const { Theme } = useSelector((state: ThemeState) => state);

  const [themeDark] = useState({ type: true });

  const newTheme = () => {
    dispatch(toggleTheme(themeDark));
  };

  return (
    <div className={Theme.type ? s.container : s.darkContainer}>
      <div className={Theme.type ? s.block : s.darkBlock}>
        <div className={s.miniContainer}>
          <h3 className={s.title}>{t("changeLang")}</h3>
          <Button title={t("change")} click={handleLanguage} />
        </div>
        <div className={s.miniContainer}>
          <h3 className={s.title}>{t("changeTheme")}</h3>
          <Button title={t("change")} click={newTheme} />
        </div>
      </div>
    </div>
  );
};

export { SettingsBlock };

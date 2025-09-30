import React from "react";
import s from "./Info.module.scss";
import { t } from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { ThemeState } from "../../Types";

const Info = () => {
  const dispatch = useDispatch();
  const { Theme } = useSelector((state: ThemeState) => state);

  return (
    <div className={Theme.type ? s.container : s.containerDark}>
      <p className={Theme.type ? s.text : s.textDark}>{t("routes")}</p>
    </div>
  );
};

export { Info };

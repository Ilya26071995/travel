import React from "react";
import { ThemeState } from "../../Types";
import { Link } from "react-router-dom";
import s from "./Navigation.module.scss";
import { useTranslation } from "react-i18next";
import i18next from "../../i18n";
import { useSelector } from "react-redux";
i18next.t("my.key");

const Navigation = () => {
  const { t } = useTranslation();

  const NAVIGATION = [
    { name: t("home"), link: "/home" },
    { name: t("trips"), link: "/trips" },
    { name: t("notes"), link: "/notes" },
    { name: t("profile"), link: "/profile" },
    { name: t("settings"), link: "/settings" },
    { name: t("login"), link: "/login" },
    { name: "dash", link: "/dashboard" },
  ];

  const { Theme } = useSelector((state: ThemeState) => state);

  return (
    <div>
      <ul className={s.list}>
        {NAVIGATION.map(({ name, link }, index) => {
          return (
            <li className={s.item} key={index}>
              <Link to={link} className={Theme.type ? s.link : s.linkDark}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { Navigation };

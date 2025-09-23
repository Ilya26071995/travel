import React, { useTransition } from "react";
import { NavType } from "../../Types";
import { Link } from "react-router-dom";
import s from "./Navigation.module.scss";
import { useTranslation } from "react-i18next";
import i18next from "../../i18n";
i18next.t("my.key");

const Navigation = () => {
  const { i18n, t } = useTranslation();

  const NAVIGATION = [
    { name: t("home"), link: "/" },
    { name: t("trips"), link: "/trips" },
    { name: t("reservations"), link: "/reservations" },
    { name: t("notes"), link: "/notes" },
    { name: t("profile"), link: "/profile" },
    { name: t("settings"), link: "/settings" },
    { name: t("login"), link: "/login" },
  ];

  return (
    <div>
      <ul className={s.list}>
        {NAVIGATION.map(({ name, link }, index) => {
          return (
            <li className={s.item} key={index}>
              <Link to={link} className={s.link}>
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

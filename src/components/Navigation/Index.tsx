import React from "react";
import { NavType } from "../../Types/Types";
import { Link } from "react-router-dom";
import s from "./Navigation.module.scss";

const NAVIGATION = [
  { name: "Поездки", link: "#" },
  { name: "Бронирования", link: "#" },
  { name: "Заметки", link: "#" },
  { name: "Профиль", link: "#" },
  { name: "Настройки", link: "#" },
];

const Navigation = () => {
  return (
    <div>
      <ul className={s.list}>
        {NAVIGATION.map(({ name, link }: NavType, index) => {
          return (
            <li className={s.item} key={index}>
              <a href={link} className={s.link}>
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { Navigation };

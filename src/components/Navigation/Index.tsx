import React from "react";
import { NavType } from "../../Types";
import { Link } from "react-router-dom";
import s from "./Navigation.module.scss";

const NAVIGATION = [
  { name: "Trips", link: "/login" },
  { name: "Reservations", link: "/login" },
  { name: "Notes", link: "/notes" },
  { name: "Profile", link: "/profile" },
  { name: "Settings", link: "/settings" },
  { name: "Login", link: "/login" },
];

const Navigation = () => {
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

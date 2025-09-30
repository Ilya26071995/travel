import React from "react";
import s from "./Reviews.module.scss";
import { t } from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { ThemeState } from "../../Types";

const Reviews = () => {
  const dispatch = useDispatch();
  const { Theme } = useSelector((state: ThemeState) => state);

  const PEOPLE = [
    {
      name: t("ben"),
      img: "../img/Ben.jpeg",
      alt: "Ben",
      text: t("chukotka"),
    },
    {
      name: t("igor"),
      img: "../img/Igor.jpeg",
      alt: "Igor",
      text: t("kamchatka"),
    },
    {
      name: t("sergey"),
      img: "../img/Sergey.jpeg",
      alt: "Sergey",
      text: t("khibiny"),
    },
  ];

  return (
    <div className={Theme.type ? s.container : s.containerDark}>
      {PEOPLE.map(({ name, img, alt, text }, index) => {
        return (
          <div key={index} className={Theme.type ? s.review : s.reviewDark}>
            <img src={img} alt={alt} className={s.img} />
            <h3 className={s.title}>{name}</h3>
            <p className={s.text}>{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export { Reviews };

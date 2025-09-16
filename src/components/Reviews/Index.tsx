import React from "react";
import s from "./Reviews.module.scss";
import { t } from "i18next";

const Reviews = () => {
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
    <div className={s.container}>
      {PEOPLE.map(({ name, img, alt, text }, index) => {
        return (
          <div key={index} className={s.review}>
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

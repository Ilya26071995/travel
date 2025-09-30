import React from "react";
import s from "./Footer.module.scss";
import { NavType, ThemeState } from "../../Types";
import { t } from "i18next";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const SOCIAL = [
  { img: "../img/vk.svg", link: "https://www.vk.com", alt: "vk" },
  {
    img: "../img/fb.svg",
    link: "https://www.facebook.com",
    alt: "facebook",
  },
  { img: "../img/boll.svg", link: "https://www.boll.com", alt: "boll" },
];

const Footer = () => {
  const LINKS = [
    { name: t("aboutUs"), link: "#" },
    { name: t("questions"), link: "#" },
    { name: t("partners"), link: "#" },
  ];

  const dispatch = useDispatch();
  const { Theme } = useSelector((state: ThemeState) => state);

  return (
    <div className={Theme.type ? s.container : s.containerDark}>
      <Link to="/">
        <img className={s.logo} src="../img/logo.svg" alt="LOGO" />
      </Link>
      <ul className={s.links}>
        {LINKS.map(({ name, link }: NavType, index) => {
          return (
            <li className={s.item} key={index}>
              <a href={link} className={Theme.type ? s.link : s.linkDark}>
                {name}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className={s.social}>
        {SOCIAL.map(({ img, link, alt }, index) => {
          return (
            <li key={index}>
              <a href={link}>
                <img src={img} alt={alt} className={s.img} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { Footer };

import React from "react";
import s from "./Footer.module.scss";
import { NavType } from "../../Types/Types";

const LINKS = [
  { name: "about us", link: "#" },
  { name: "questions", link: "#" },
  { name: "partners", link: "#" },
];

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
  return (
    <div className={s.container}>
      <ul className={s.links}>
        {LINKS.map(({ name, link }: NavType, index) => {
          return (
            <li className={s.item} key={index}>
              <a href={link} className={s.link}>
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

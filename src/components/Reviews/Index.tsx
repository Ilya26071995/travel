import React from "react";
import s from "./Reviews.module.scss";

const PEOPLE = [
  {
    name: "Ben",
    img: "../img/Ben.jpeg",
    alt: "Ben",
    text: "Chukotka! She either doesn't accept or doesn't let go. We (we traveled as a family) were lucky; Chukotka settled in our hearts forever!  To say that everyone definitely needs it - no, I won’t say it. Chukotka is not for everyone, that's for sure. To understand this region, you need strong nerves, calmness, only positivity at the construction site and joy throughout the world.",
  },
  {
    name: "Igor",
    img: "../img/Igor.jpeg",
    alt: "Igor",
    text: "Just returned from a trip yesterday. A very interesting tour. Kamchatka is extraordinary. We weren’t always lucky with the weather, but it didn’t upset us; we saw everything that was planned. Everything was excellent, all locations, transport, support at the highest level. The hotel is good, it has everything you need for a vacation. We already miss the volcanoes and will be planning our next visits!",
  },
  {
    name: "Sergey",
    img: "../img/Sergey.jpeg",
    alt: "Sergey",
    text: "The Khibiny mountains don’t let go... it’s been three weeks since we returned, and part of me is still there, in the mountains, in the land of the never-setting sun, the crazy beauty of nature, where you start the day with the anticipation of new miracles, and end with a feeling of complete happiness.",
  },
];

const Reviews = () => {
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

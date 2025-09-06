import React from "react";
import s from "./MyInfo.module.scss";

const MyInfo = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Information about you</h2>
      <form className={s.form}>
        <label className={s.label}>
          Your name
          <input
            className={s.input}
            type="text"
            placeholder="Enter name"
          ></input>
        </label>
        <label className={s.label}>
          Your age
          <input
            className={s.input}
            type="text"
            placeholder="Enter age"
          ></input>
        </label>
        <label className={s.label}>
          Your city
          <input
            className={s.input}
            type="text"
            placeholder="Enter city"
          ></input>
        </label>
        <label className={s.label}>
          Tell us about yourself
          <textarea
            className={s.textarea}
            placeholder="Tell us about yourself"
          ></textarea>
        </label>
      </form>
    </div>
  );
};

export { MyInfo };

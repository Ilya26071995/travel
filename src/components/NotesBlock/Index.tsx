import React from "react";
import s from "./NotesBlock.module.scss";

const NotesBlock = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>New note</h2>
      <form className={s.form}>
        <label className={s.miniTitle}>
          Title
          <input type="text" className={s.input} />
        </label>
        <label className={s.miniTitle}>
          Text
          <textarea className={s.textarea}></textarea>
        </label>
      </form>
    </div>
  );
};

export { NotesBlock };

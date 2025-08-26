import React from "react";
import s from "./Note.module.scss";

const Note = ({ note }: any) => {
  return (
    <div className={s.container}>
      <h3 className={s.title}>{note.title}</h3>
      <p className={s.text}>{note.text}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export { Note };

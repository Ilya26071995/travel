import React, { useState, useId } from "react";
import s from "./NotesBlock.module.scss";
import { NotesType } from "../../Types/Types";
import { Button } from "../Button/Index";
import { useDispatch, useSelector } from "react-redux";
import { addNotes, removeNotes } from "../../store/notes/notes.slice";
import { RootState } from "@reduxjs/toolkit/query";
import { number } from "yup";

const NotesBlock = () => {
  const dispatch = useDispatch();
  const { Notes } = useSelector((state: any) => state);

  const [note, setNote] = useState({
    title: "",
    text: "",
    id: Date.now(),
  });

  const handelSubmit = (e: any) => {
    e.preventDefault();
    setNote({
      title: "",
      text: "",
      id: Date.now(),
    });
  };

  return (
    <div className={s.container}>
      <div>
        <h1 className={s.title}>Add note</h1>
        <form onSubmit={handelSubmit} className={s.flex}>
          <label>
            <input
              className={s.name}
              type="text"
              placeholder="title"
              value={note.title}
              onChange={(e) => setNote({ ...note, title: e.target.value })}
            />
          </label>
          <label>
            <textarea
              className={s.text}
              placeholder="text"
              value={note.text}
              onChange={(e) => setNote({ ...note, text: e.target.value })}
            />
          </label>
          <Button
            title="Add note"
            type="submit"
            click={() => dispatch(addNotes(note))}
          />
        </form>
      </div>

      {Notes.map((not: NotesType, index: number) => (
        <div key={index} id={Date.now()} className={s.note}>
          <p className={s.noteTitle}>{not.title}</p>
          <h3 className={s.noteText}>{not.text}</h3>
          <div className={s.button}>
            <Button title="Remove" click={() => dispatch(removeNotes(not))} />
          </div>
        </div>
      ))}
    </div>
  );
};

export { NotesBlock };

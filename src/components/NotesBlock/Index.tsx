import React, { FormEventHandler, useState } from "react";
import s from "./NotesBlock.module.scss";
import { NoteState, NotesType, ThemeState } from "../../Types";
import { Button } from "../Button/Index";
import { useDispatch, useSelector } from "react-redux";
import { addNotes, removeNotes } from "../../store/slices/notes.slice";
import { t } from "i18next";

const NotesBlock = () => {
  const dispatch = useDispatch();
  const { Notes } = useSelector((state: NoteState) => state);
  const { Theme } = useSelector((state: ThemeState) => state);

  const [note, setNote] = useState({
    title: "",
    text: "",
    id: Date.now(),
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    () => dispatch(addNotes(note));
    setNote({
      title: "",
      text: "",
      id: Date.now(),
    });
  };

  return (
    <div className={Theme.type ? s.container : s.containerDark}>
      <div className={Theme.type ? s.noteForm : s.noteFormDark}>
        <h1 className={s.title}>{t("addNote")}</h1>
        <form onSubmit={handleSubmit} className={s.flex}>
          <label>
            <input
              className={Theme.type ? s.name : s.nameDark}
              type="text"
              placeholder={t("title")}
              value={note.title}
              onChange={(e) => setNote({ ...note, title: e.target.value })}
            />
          </label>
          <label>
            <textarea
              className={Theme.type ? s.text : s.textDark}
              placeholder={t("text")}
              value={note.text}
              onChange={(e) => setNote({ ...note, text: e.target.value })}
            />
          </label>
          <div className={s.add}>
            <Button
              title={t("addNote")}
              type="submit"
              click={() => dispatch(addNotes(note))}
            />
          </div>
        </form>
      </div>
      {Notes.map((not: NotesType, index: number) => (
        <div key={index} className={Theme.type ? s.note : s.noteDark}>
          <h3 className={s.noteTitle}>{not.title}</h3>
          <p className={s.noteText}>{not.text}</p>
          <div className={s.button}>
            <Button
              title={t("remove")}
              click={() => dispatch(removeNotes(not))}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export { NotesBlock };

import React, { useState } from "react";
import s from "./NotesBlock.module.scss";
import { NotesType } from "../../Types/Types";
import { Note } from "../Note/Index";
import { Button } from "../Button/Index";

const NotesBlock = () => {
  const [notes, setNotes] = useState<NotesType[]>([]);
  const [newNote, setNewNote] = useState({ title: "", text: "" });

  const addNote = () => {
    if (newNote.title && newNote.text) {
      const newId = Date.now().toString();
      setNotes([...notes, { ...newNote, id: newId }]);
      setNewNote({ title: "", text: "" });
    }
  };

  return (
    <div className={s.container}>
      <div className={s.flex}>
        <h1 className={s.title}>Add note</h1>
        <input
          type="text"
          placeholder="Title"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
          className={s.name}
        />
        <textarea
          value={newNote.text}
          onChange={(e) => setNewNote({ ...newNote, text: e.target.value })}
          className={s.text}
          placeholder="Text"
        />
        <Button title="Add note" click={addNote} />
      </div>
      <div>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export { NotesBlock };

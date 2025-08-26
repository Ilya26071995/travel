import React, { useState } from "react";
import s from "./NotesBlock.module.scss";
import { Notes } from "../../Types/Types";
import { Note } from "../Note/Index";

const NotesBlock = () => {
  const [notes, setNotes] = useState<Notes[]>([]);
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
      <h1 className={s.title}>Add note</h1>
      <div className={s.flex}>
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
        <button onClick={addNote}>Add note</button>
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

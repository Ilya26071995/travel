import { createSlice } from "@reduxjs/toolkit";
import { NotePayload, NotesType } from "../../Types";

const initialState: NotesType[] = [];

export const notesSlice = createSlice({
  name: "Notes",
  initialState,
  reducers: {
    addNotes: (state, { payload }: NotePayload) => {
      state.push(payload);
    },
    removeNotes: (state, { payload }: NotePayload) => {
      return state.filter((item) => item.id !== payload.id);
    },
  },
});

export const { addNotes, removeNotes } = notesSlice.actions;
export default notesSlice.reducer;

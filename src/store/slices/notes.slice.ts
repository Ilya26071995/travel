import { createSlice } from "@reduxjs/toolkit";
import { NotesType } from "../../Types";

const initialState: NotesType[] = [];

export const notesSlice = createSlice({
  name: "Notes",
  initialState,
  reducers: {
    addNotes: (state, { payload }) => {
      state.push(payload);
    },
    removeNotes: (state, { payload }) => {
      return state.filter((item) => item.id !== payload.id);
    },
  },
});

export const { addNotes, removeNotes } = notesSlice.actions;
export default notesSlice.reducer;

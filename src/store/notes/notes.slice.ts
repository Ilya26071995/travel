import { createSlice } from "@reduxjs/toolkit";
import { NotesType } from "../../Types/Types";

const initialState: NotesType[] = [];

export const notesSlice = createSlice({
  name: "Notes",
  initialState,
  reducers: {
    addNotes: (state, { payload }) => {
      state.push(payload);
    },
    removeNotes: (state, { payload }) => {
      state.filter((item) => item.id !== payload.id);
      console.log(payload);
    },
  },
});

export const { addNotes, removeNotes } = notesSlice.actions;
export default notesSlice.reducer;

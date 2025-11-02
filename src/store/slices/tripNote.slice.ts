import { createSlice } from "@reduxjs/toolkit";
import { NotePayload, NotesType } from "../../Types";

const initialState: NotesType[] = [];

export const notesTripSlice = createSlice({
  name: "NotesTrip",
  initialState,
  reducers: {
    addNotesTrip: (state, { payload }: NotePayload) => {
      state.push(payload);
    },
    removeNotesTrip: (state, { payload }: NotePayload) => {
      return state.filter((item) => item.id !== payload.id);
    },
  },
});

export const { addNotesTrip, removeNotesTrip } = notesTripSlice.actions;
export default notesTripSlice.reducer;

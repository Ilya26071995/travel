import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducer, { notesSlice as noteReducer } from "./notes/notes.slice";

const reducers = combineReducers({
  Notes: reducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

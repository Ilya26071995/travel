import { combineReducers, configureStore } from "@reduxjs/toolkit";
import notesSlice from "./notes/notes.slice";
import myInfoSlice from "./notes/MyInfo.slice";
const reducers = combineReducers({
  Notes: notesSlice,
  Info: myInfoSlice,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

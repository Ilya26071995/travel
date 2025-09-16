import { combineReducers, configureStore } from "@reduxjs/toolkit";
import notesSlice from "./notes/notes.slice";
import myInfoSlice from "./notes/mymyInfo.slice";
import loginSlice from "./notes/login.slice";
const reducers = combineReducers({
  Notes: notesSlice,
  Info: myInfoSlice,
  Form: loginSlice,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

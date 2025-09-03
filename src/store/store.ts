import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducer, { notesSlice as noteReducer } from "./notes/notes.slice";
import { api } from "../api/api";

const reducers = combineReducers({
  Notes: reducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

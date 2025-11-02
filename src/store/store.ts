import { combineReducers, configureStore } from "@reduxjs/toolkit";
import notesSlice from "./slices/notes.slice";
import myInfoSlice from "./slices/myInfo.slice";
import tripsSlice from "./slices/trip.slice";
import toggleThemeSlice from "./slices/toggleTheme.slice";
import notesTripSlice from "./slices/tripNote.slice";

const reducers = combineReducers({
  Notes: notesSlice,
  Info: myInfoSlice,
  Trips: tripsSlice,
  Theme: toggleThemeSlice,
  NotesTrip: notesTripSlice,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

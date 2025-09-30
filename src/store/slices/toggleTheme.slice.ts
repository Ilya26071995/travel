import { createSlice } from "@reduxjs/toolkit";

import { ThemeType } from "../../Types";

const initialState: ThemeType = { type: true };

export const toggleThemeSlice = createSlice({
  name: "Theme",
  initialState,
  reducers: {
    toggleTheme: (state, { payload }) => {
      payload.type
        ? (state.type = payload.type = false)
        : (state.type = payload.type = true);
      console.log(state.type);
    },
  },
});

export const { toggleTheme } = toggleThemeSlice.actions;
export default toggleThemeSlice.reducer;

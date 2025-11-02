import { createSlice } from "@reduxjs/toolkit";

import { ThemePayload, ThemeType } from "../../Types";

const initialState: ThemeType = { type: true };

export const toggleThemeSlice = createSlice({
  name: "Theme",
  initialState,
  reducers: {
    toggleTheme: (state, { payload }: ThemePayload) => {
      payload.type
        ? (state.type = payload.type = false)
        : (state.type = payload.type = true);
    },
  },
});

export const { toggleTheme } = toggleThemeSlice.actions;
export default toggleThemeSlice.reducer;

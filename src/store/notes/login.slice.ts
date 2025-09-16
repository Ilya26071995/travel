import { createSlice } from "@reduxjs/toolkit";
import { FormType } from "../../Types";

const initialState: FormType = { name: "", mail: "", type: false };

export const loginSlice = createSlice({
  name: "Form",
  initialState,
  reducers: {
    EnterForm: (state, { payload }) => ({
      ...state,
      name: payload.name,
      mail: payload.mail,
      type: (payload.type = true),
    }),
    ExitForm: (state, { payload }) => ({
      ...state,
      type: (payload.type = false),
    }),
  },
});

export const { EnterForm, ExitForm } = loginSlice.actions;
export default loginSlice.reducer;

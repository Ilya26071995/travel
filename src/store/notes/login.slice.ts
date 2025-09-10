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
  },
});

export const { EnterForm } = loginSlice.actions;
export default loginSlice.reducer;

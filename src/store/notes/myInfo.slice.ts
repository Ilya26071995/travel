import { createSlice } from "@reduxjs/toolkit";
import { MyInfoType } from "../../Types";
import { bool, boolean, number } from "yup";

const initialState: MyInfoType = {
  name: "",
  age: "",
  city: "",
  text: "",
  type: 1,
};

export const myInfoSlice = createSlice({
  name: "Info",
  initialState,
  reducers: {
    EnterProfile: (state, { payload }) => ({
      ...state,
      name: payload.name,
      age: payload.age,
      city: payload.city,
      text: payload.text,
      type: (payload.type = 2),
    }),
  },
});

export const { EnterProfile } = myInfoSlice.actions;
export default myInfoSlice.reducer;

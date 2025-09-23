import { createSlice } from "@reduxjs/toolkit";
import { TripType } from "../../Types";

const initialState: TripType[] = [];

export const tripsSlice = createSlice({
  name: "Trips",
  initialState,
  reducers: {
    addTrip: (state, { payload }) => {
      state.push(payload);
    },
    removeTrip: (state, { payload }) => {
      return state.filter((item) => item.id !== payload.id);
    },
  },
});

export const { addTrip, removeTrip } = tripsSlice.actions;
export default tripsSlice.reducer;

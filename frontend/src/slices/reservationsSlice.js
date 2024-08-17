import { createSlice } from "@reduxjs/toolkit";

const reservationsSlice = createSlice({
  name: "reservations",
  initialState: [],
  reducers: {
    setReservations: (state, action) => {
      return action.payload;
    },
  },
});

export const { setReservations } = reservationsSlice.actions;
export default reservationsSlice.reducer;

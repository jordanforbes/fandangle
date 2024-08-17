import { createSlice } from "@reduxjs/toolkit";

const theatersSlice = createSlice({
  name: "theaters",
  initialState: [],
  reducers: {
    setTheaters: (state, action) => {
      return action.payload;
    },
  },
});

export const { setTheaters } = theatersSlice.actions;
export default theatersSlice.reducer;

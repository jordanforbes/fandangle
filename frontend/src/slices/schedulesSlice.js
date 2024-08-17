import { createSlice } from "@reduxjs/toolkit";

const schedulesSlice = createSlice({
  name: "schedules",
  initialState: [],
  reducers: {
    setSchedules: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSchedules } = schedulesSlice.actions;
export default schedulesSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/moviesSlice";
import reservationsReducer from "./slices/reservationsSlice";
import schedulesReducer from "./slices/schedulesSlice";
import theatersReducer from "./slices/theatersSlice";
import usersReducer from "./slices/usersSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    users: usersReducer,
    theaters: theatersReducer,
    schedules: schedulesReducer,
    reservations: reservationsReducer,
  },
});

export default store;

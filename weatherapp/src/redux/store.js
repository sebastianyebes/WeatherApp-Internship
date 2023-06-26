import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import weatherReducer from "./features/weather-slice";

export default configureStore({
  reducer: {
    weather: weatherReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

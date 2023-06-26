import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import weatherReducer from "./features/weather-slice";
import locationReducer from "./features/location-slice";

export default configureStore({
  reducer: {
    weather: weatherReducer,
    location: locationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

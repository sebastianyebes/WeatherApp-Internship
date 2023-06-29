import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import weatherReducer from "./features/weather-slice";
import locationReducer from "./features/location-slice";
import dateReducer from "./features/date-slice";

export default configureStore({
  reducer: {
    weather: weatherReducer,
    location: locationReducer,
    date: dateReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

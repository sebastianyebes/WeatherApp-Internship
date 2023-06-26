import { getWeather } from "../../api/weather";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  weather: [],
  loading: false,
  error: null,
};

export const fetchWeather = createAsyncThunk(
  "weather/getWeather",
  async ({ lat, lon }) => {
    try {
      const response = await getWeather(lat, lon);
      return response;
    } catch (error) {
      return error;
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.weather = action.payload;
      state.loading = false;
      state.error = null;
    });
  },
});

export default weatherSlice.reducer;

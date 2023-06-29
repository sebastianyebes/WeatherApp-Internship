import { createSlice } from "@reduxjs/toolkit";

const time = new Date().toLocaleTimeString("en-US", {
  hour12: true,
  hour: "numeric",
  minute: "numeric",
});

const date = new Date().toLocaleDateString();

const dateSlice = createSlice({
  name: "date",
  initialState: {
    date: "",
    time: "",
  },
  reducers: {
    setDate: (state) => {
      state.date = date;
    },
    setTime: (state) => {
      state.time = time;
    },
  },
});

export default dateSlice.reducer;
export const { setDate, setTime } = dateSlice.actions;

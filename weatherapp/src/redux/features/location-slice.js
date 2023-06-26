import { getLocation } from "@/api/geocoding";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  location: [],
  loading: false,
  error: null,
};

export const fetchLocation = createAsyncThunk(
  "location/getLocation",
  async (address) => {
    try {
      const response = await getLocation(address);
      return response;
    } catch (error) {
      return error;
    }
  }
);

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLocation.fulfilled, (state, action) => {
      state.location = action.payload;
      state.loading = false;
      state.error = null;
    });
  },
});

export default locationSlice.reducer;

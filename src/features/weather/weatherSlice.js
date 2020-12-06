import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import weatherAPI from "../../api";

const sliceName = "weather";

export const fetchCurrentWeather = createAsyncThunk(
  `${sliceName}/fetchCurrentWeather`,
  ({ query }) => weatherAPI.fetchCurrentWeather({ query })
);

export const fetchWeekForecast = createAsyncThunk(`${sliceName}/fetchWeekForecast`, ({ query }) =>
  weatherAPI.fetchWeekForecast({ query })
);

export const fetchWeatherForecast = createAsyncThunk(
  `${sliceName}/fetchWeatherForecast`,
  ({ lat, lon }) => weatherAPI.fetchWeatherForecast({ lat, lon })
);

export const weatherSlice = createSlice({
  name: sliceName,
  initialState: {
    current: null,
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchWeekForecast.pending]: (state, { payload, meta }) => {
      state.loading = true;
    },
    [fetchWeekForecast.fulfilled]: (state, { payload, meta }) => {
      state.loading = false;
      state.current = payload.data;
    },
    [fetchWeekForecast.rejected]: (state, { error, meta }) => {
      state.loading = false;
      state.error = error;
    },
  },
});

export const selectWeather = (state) => state.weather.current;

export default weatherSlice.reducer;

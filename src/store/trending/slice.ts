import { createSlice } from '@reduxjs/toolkit';

import { fetchTrendingGifs } from './thunks';

const initialState = {
  trendingGifsIsLoading: false,
  trendingGifs: null,
  trendingGifsError: null,
};

export const trendingSlice = createSlice({
  name: 'trending',
  initialState,
  reducers: {
    // 동기 작업을 하는 곳
  },

  // 비동기 작업을 하는 곳
  extraReducers: (builder) =>
    builder
      .addCase(fetchTrendingGifs.pending, (state) => {
        state.trendingGifsIsLoading = true;
      })
      .addCase(fetchTrendingGifs.fulfilled, (state, action) => {
        state.trendingGifsIsLoading = false;
        state.trendingGifs = action.payload;
      })
      .addCase(fetchTrendingGifs.rejected, (state, action) => {
        state.trendingGifsIsLoading = false;
        state.trendingGifsError = action.payload;
      }),
});

export const { reducer: trendingReducer } = trendingSlice;

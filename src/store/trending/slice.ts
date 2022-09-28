import { createSlice } from '@reduxjs/toolkit';

import { fetchTrendingGifs, fetchTrendingClips } from './thunks';

const initialState = {
  trendingGifsIsLoading: false,
  trendingGifs: null,
  trendingGifsError: null,
  trendingClipsIsLoading: false,
  trendingClips: null,
  trendingClipsError: null,
};

export const trendingSlice = createSlice({
  name: 'trending',
  initialState,
  reducers: {
    // 동기 작업을 하는 곳
  },

  // 비동기 작업을 하는 곳
  extraReducers: {
    [fetchTrendingClips.pending.type]: (state) => {
      state.trendingClipsIsLoading = true;
    },
    [fetchTrendingClips.fulfilled.type]: (state, action) => {
      state.trendingClipsIsLoading = false;
      state.trendingClips = action.payload;
    },
    [fetchTrendingClips.rejected.type]: (state, action) => {
      state.trendingClipsIsLoading = false;
      state.trendingClipsError = action.payload;
    },
    [fetchTrendingGifs.pending.type]: (state) => {
      state.trendingGifsIsLoading = true;
    },
    [fetchTrendingGifs.fulfilled.type]: (state, action) => {
      state.trendingGifsIsLoading = false;
      state.trendingGifs = action.payload;
    },
    [fetchTrendingGifs.rejected.type]: (state, action) => {
      state.trendingGifsIsLoading = false;
      state.trendingGifsError = action.payload;
    },
  },
});

export const { reducer: trendingReducer } = trendingSlice;

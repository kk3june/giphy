import { createSlice } from '@reduxjs/toolkit';

import { StateTypes } from 'types/state';

import { fetchTrendingGifs, fetchTrendingClips } from './trendingThunks';

const initialState = {
  trendingGifsIsLoading: false,
  trendingGifs: null,
  trendingGifsError: null,
  trendingClipsIsLoading: false,
  trendingClips: null,
  trendingClipsError: null,
} as StateTypes;

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
    [fetchTrendingGifs.fulfilled.type]: (state, { meta: { arg }, payload }) => {
      state.trendingGifsIsLoading = false;
      if (arg.offset === 0) {
        state.trendingGifs = payload;
      } else {
        state.trendingGifs = [...state.trendingGifs, ...payload];
      }
    },
    [fetchTrendingGifs.rejected.type]: (state, action) => {
      state.trendingGifsIsLoading = false;
      state.trendingGifsError = action.payload;
    },
  },
});

export const { reducer: trendingReducer } = trendingSlice;

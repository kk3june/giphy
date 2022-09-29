import { createSlice } from '@reduxjs/toolkit';

import { StateTypes } from 'types/state';

import { fetchRelatedGifs, fetchRelatedClips } from './thunks';

const initialState = {
  relatedGifsIsLoading: false,
  relatedGifs: null,
  relatedGifsError: null,
  relatedClipsIsLoading: false,
  relatedClips: null,
  relatedClipsError: null,
} as StateTypes;

export const relatedSlice = createSlice({
  name: 'related',
  initialState,
  reducers: {
    // 동기 작업을 하는 곳
  },

  // 비동기 작업을 하는 곳
  extraReducers: {
    [fetchRelatedClips.pending.type]: (state) => {
      state.relatedClipsIsLoading = true;
    },
    [fetchRelatedClips.fulfilled.type]: (state, action) => {
      state.relatedClipsIsLoading = false;
      state.relatedClips = action.payload;
    },
    [fetchRelatedClips.rejected.type]: (state, action) => {
      state.relatedClipsIsLoading = false;
      state.relatedClipsError = action.payload;
    },
    [fetchRelatedGifs.pending.type]: (state) => {
      state.relatedGifsIsLoading = true;
    },
    [fetchRelatedGifs.fulfilled.type]: (state, action) => {
      state.relatedGifsIsLoading = false;
      state.relatedGifs = action.payload;
    },
    [fetchRelatedGifs.rejected.type]: (state, action) => {
      state.relatedGifsIsLoading = false;
      state.relatedGifsError = action.payload;
    },
  },
});

export const { reducer: relatedReducer } = relatedSlice;

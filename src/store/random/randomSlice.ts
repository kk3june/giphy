import { createSlice } from '@reduxjs/toolkit';

import { StateTypes } from 'types/state';

import { fetchRandom } from './randomThunk';

const initialState = {
  randomContentIsLoading: false,
  randomContent: null,
  randomContentError: null,
} as StateTypes;

export const randomSlice = createSlice({
  name: 'random',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRandom.pending.type]: (state) => {
      state.randomContentIsLoading = true;
    },
    [fetchRandom.fulfilled.type]: (state, action) => {
      state.randomContentIsLoading = false;
      state.randomContent = action.payload;
    },
    [fetchRandom.rejected.type]: (state, action) => {
      state.randomContentIsLoading = false;
      state.randomContentError = action.payload;
    },
  },
});

export const { reducer: randomReducer } = randomSlice;

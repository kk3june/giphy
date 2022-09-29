import { createSlice } from '@reduxjs/toolkit';

import { StateTypes } from 'types/state';

import { fetchById } from './thunks';

const initialState = {
  fetchContentByIdIsLoading: false,
  fetchContentById: null,
  fetchContentByIdError: null,
} as StateTypes;

export const byIdSlice = createSlice({
  name: 'byId',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchById.pending.type]: (state) => {
      state.fetchContentByIdIsLoading = true;
    },
    [fetchById.fulfilled.type]: (state, action) => {
      state.fetchContentByIdIsLoading = false;
      state.fetchContentById = action.payload;
    },
    [fetchById.rejected.type]: (state, action) => {
      state.fetchContentByIdIsLoading = false;
      state.fetchContentByIdError = action.payload;
    },
  },
});

export const { reducer: byIdReducer } = byIdSlice;

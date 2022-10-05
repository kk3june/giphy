import { createSlice } from '@reduxjs/toolkit';

import { StateTypes } from 'types/state';

import { fetchSearchData } from './searchThunks';

const initialState = {
  searchDataIsLoading: false,
  searchData: null,
  searchDataError: null,
} as StateTypes;

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSearchData.pending.type]: (state) => {
      state.searchDataIsLoading = true;
    },
    [fetchSearchData.fulfilled.type]: (state, action) => {
      state.searchDataIsLoading = false;
      state.searchData = action.payload;
    },
    [fetchSearchData.rejected.type]: (state, action) => {
      state.searchDataIsLoading = false;
      state.searchDataError = action.payload;
    },
  },
});

export const { reducer: searchReducer } = searchSlice;

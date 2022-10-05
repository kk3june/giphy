import { createSlice } from '@reduxjs/toolkit';

import { StateTypes } from 'types/state';

import { fetchCategories, fetchSubCategories } from './categoryThunk';

const initialState = {
  categoryDataIsLoading: false,
  categoryData: null,
  categoryDataError: null,
  subCategoryDataIsLoading: false,
  subCategoryData: null,
  subCategoryDataError: null,
} as StateTypes;

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCategories.pending.type]: (state) => {
      state.categoryDataIsLoading = true;
    },
    [fetchCategories.fulfilled.type]: (state, action) => {
      state.categoryDataIsLoading = false;
      state.categoryData = action.payload;
    },
    [fetchCategories.rejected.type]: (state, action) => {
      state.categoryDataIsLoading = false;
      state.categoryDataError = action.payload;
    },
    [fetchSubCategories.pending.type]: (state) => {
      state.subCategoryDataIsLoading = true;
    },
    [fetchSubCategories.fulfilled.type]: (state, action) => {
      state.subCategoryDataIsLoading = false;
      state.subCategoryData = action.payload;
    },
    [fetchSubCategories.rejected.type]: (state, action) => {
      state.subCategoryDataIsLoading = false;
      state.subCategoryDataError = action.payload;
    },
  },
});

export const { reducer: categoryReducer } = categorySlice;

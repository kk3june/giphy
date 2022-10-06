import { createAsyncThunk } from '@reduxjs/toolkit';

import { gf } from 'pages/api/fetchAPI';

export const fetchCategories = createAsyncThunk('category/getCategories', async (thunkAPI: any) => {
  try {
    const { data: categories } = await gf.categories();
    // categories.forEach((category) => {
    //   console.log('category', category); // ICategory
    // });
    return categories;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const fetchSubCategories = createAsyncThunk('category/getSubCategories', async (thunkAPI: any) => {
  try {
    const { data: categories } = await gf.subcategories('tennis', { limit: 10, offset: 25, rating: 'g' });
    // categories.forEach((category) => {
    //   console.log('subcategory', category); // ICategory
    // });
    return categories;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

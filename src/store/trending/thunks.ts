import { createAsyncThunk } from '@reduxjs/toolkit';

import { gf } from 'pages/api/fetchAPI';

export const fetchTrendingGifs = createAsyncThunk('trendings/getTrendingGifs', async ({ params, thunkAPI }: any) => {
  try {
    const { data: gifs } = await gf.trending(params);
    return gifs;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export default fetchTrendingGifs;

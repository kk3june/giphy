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

export const fetchTrendingClips = createAsyncThunk('trendings/getTrendingClips', async ({ thunkAPI }: any) => {
  try {
    const { data: clips } = await gf.trending({ type: 'videos', limit: 3 });
    return clips;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

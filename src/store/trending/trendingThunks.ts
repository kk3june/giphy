import { createAsyncThunk } from '@reduxjs/toolkit';

import { gf } from 'pages/api/fetchAPI';

export const fetchTrendingGifs = createAsyncThunk(
  'trendings/getTrendingGifs',
  async ({ limit, offset }: any, thunkAPI) => {
    try {
      const { data: gifs } = await gf.trending({ limit, offset });
      return gifs;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export const fetchTrendingClips = createAsyncThunk('trendings/getTrendingClips', async (params: number, thunkAPI) => {
  try {
    const { data: clips } = await gf.trending({ type: 'videos', limit: params });
    return clips;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

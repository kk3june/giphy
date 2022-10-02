import { createAsyncThunk } from '@reduxjs/toolkit';

import { gf } from 'pages/api/fetchAPI';

export const fetchRandom = createAsyncThunk('random/getContent', async (thunkAPI: any) => {
  try {
    const { data: gif } = await gf.random({ tag: 'art', type: 'gifs' });
    return gif;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export default fetchRandom;

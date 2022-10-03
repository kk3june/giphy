import { createAsyncThunk } from '@reduxjs/toolkit';

import { gf } from 'pages/api/fetchAPI';

export const fetchById = createAsyncThunk('artists/getContentById', async (id: string, thunkAPI) => {
  try {
    const { data: content } = await gf.gifs([id]);
    return content;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export default fetchById;

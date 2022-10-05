import { createAsyncThunk } from '@reduxjs/toolkit';

import { gf } from 'pages/api/fetchAPI';

export const fetchSearchData = createAsyncThunk('search/getSearchData', async (params: string, thunkAPI) => {
  try {
    const { data: gifs } = await gf.search(params, { sort: 'relevant', lang: 'es', limit: 10, type: 'gifs' });
    return gifs;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export default fetchSearchData;

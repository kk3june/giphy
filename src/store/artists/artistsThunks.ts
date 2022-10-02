import { createAsyncThunk } from '@reduxjs/toolkit';

import { gf } from 'pages/api/fetchAPI';

export const fetchArtistsGifs = createAsyncThunk('artists/getArtistsGifs', async (thunkAPI: any) => {
  try {
    const { data: gifs } = await gf.gifs('art', 'loop');
    return gifs;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export default fetchArtistsGifs;

import { createAsyncThunk } from '@reduxjs/toolkit';

import { gf } from 'pages/api/fetchAPI';

export const fetchRelatedClips = createAsyncThunk('related/getRelatedClips', async ({ id, thunkAPI }: any) => {
  try {
    const { data: clips } = await gf.related(id, { limit: 4 });
    return clips;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const fetchRelatedGifs = createAsyncThunk('related/getRelatedGifs', async ({ id, thunkAPI }: any) => {
  try {
    const { data: gifs } = await gf.related(id, { limit: 12 });
    console.log('check', id);
    console.log(gifs);
    return gifs;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

import { createAsyncThunk } from '@reduxjs/toolkit';

import { gf } from 'pages/api/fetchAPI';

export const fetchById = createAsyncThunk('artists/getContentById', async (id: string) => {
  try {
    const { data: content } = await gf.gifs([id]);
    return content;
  } catch (e) {
    return console.log('error');
  }
});

export default fetchById;

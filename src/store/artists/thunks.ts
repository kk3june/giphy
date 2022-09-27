import { createAsyncThunk } from '@reduxjs/toolkit';

import { gf } from 'pages/api/fetchAPI';

export const fetchArtistsGifs = createAsyncThunk('artists/getArtistsGifs', async () => {
  try {
    const { data: gifs } = await gf.gifs('art', 'loop');
    return gifs;
  } catch (e) {
    return console.log('error');
  }
});

export default fetchArtistsGifs;

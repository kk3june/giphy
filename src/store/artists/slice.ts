import { createSlice } from '@reduxjs/toolkit';

import { fetchArtistsGifs } from './thunks';

const initialState = {
  artistsGifsIsLoading: false,
  artistsGifs: null,
  artistsGifsError: null,
};

export const artistsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchArtistsGifs.pending, (state) => {
        state.artistsGifsIsLoading = true;
      })
      .addCase(fetchArtistsGifs.fulfilled, (state, action) => {
        state.artistsGifsIsLoading = false;
        state.artistsGifs = action.payload;
      })
      .addCase(fetchArtistsGifs.rejected, (state, action) => {
        state.artistsGifsIsLoading = false;
        state.artistsGifsError = action.payload;
      }),
});

export const { reducer: artistsReducer } = artistsSlice;

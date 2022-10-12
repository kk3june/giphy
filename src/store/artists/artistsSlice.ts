import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateTypes } from 'types/state';

import { fetchArtistsGifs } from './artistsThunks';

const initialState = {
  artistsGifsIsLoading: false,
  artistsGifs: null,
  artistsGifsError: null,
} as StateTypes;

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
      .addCase(fetchArtistsGifs.rejected, (state, action: PayloadAction<any>) => {
        state.artistsGifsIsLoading = false;
        state.artistsGifsError = action.payload;
      }),
});

export const { reducer: artistsReducer } = artistsSlice;

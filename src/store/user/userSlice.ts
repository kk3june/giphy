import { createSlice } from '@reduxjs/toolkit';

import { StateTypes } from 'types/state';

const initialState = {
  username: 'login',
} as StateTypes;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, payload) => {
      state.username = payload.payload;
    },
  },
});

export const { setName } = userSlice.actions;

export const { reducer: userReducer } = userSlice;

export default userSlice.reducer;

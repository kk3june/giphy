import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  name: string | null;
}

const initialState: UserState = {
  name: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, payload) => {
      state.name = payload.payload;
    },
  },
});

export const { setName } = userSlice.actions;

export const { reducer: userReducer } = userSlice;

export default userSlice.reducer;

import { configureStore, ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { artistsReducer } from './artists/slice';
import { trendingReducer } from './trending/slice';
import { userReducer } from './user/slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    trending: trendingReducer,
    artists: artistsReducer,
  },
  devTools: true,
});

const makeStore = () => {
  // add middleware
  return store;
};

const wrapper = createWrapper(makeStore);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;

export default wrapper;

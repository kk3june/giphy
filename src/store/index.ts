import { configureStore, ThunkDispatch, AnyAction, combineReducers } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { HYDRATE } from 'next-redux-wrapper';

import { artistsReducer } from './artists/slice';
import { byIdReducer } from './byId/slice';
import { relatedReducer } from './related/slice';
import { trendingReducer } from './trending/slice';
import { userReducer } from './user/slice';

const rootReducer = (state, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        user: userReducer,
        trending: trendingReducer,
        artists: artistsReducer,
        related: relatedReducer,
        byId: byIdReducer,
      });
      return combineReducer(state, action);
    }
  }
};

export const store = configureStore({
  reducer: rootReducer,
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

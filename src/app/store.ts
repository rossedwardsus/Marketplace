import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
//import nftReducer from '../features/nft/nftSlice';
//import userReducer from '../features/nft/userSlice';
//import userNftsReducer from '../features/nft/nftSlice';
//import userFollwersReducer from '../features/nft/nftSlice';
//import userFollwingReducer from '../features/nft/nftSlice';
//import userInboxReducer from '../features/nft/nftSlice';
//cart

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

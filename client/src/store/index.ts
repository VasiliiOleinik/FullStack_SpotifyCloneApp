import { createWrapper } from "next-redux-wrapper";
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { playerReducer, playerSlice } from "./reducers/PlayerReducer";
import { trackReducer, trackSlice } from "./reducers/TrackReducer";
import { oneTrackReducer, oneTrackSlice } from "./reducers/OneTrackReducer";
import { commentsReducer, commentsSlice } from "./reducers/CommentReducer";


export const makeStore = () =>
  configureStore({
    reducer: {
      [playerSlice.name]: playerReducer,
      [trackSlice.name]: trackReducer,
      [oneTrackSlice.name]: oneTrackReducer,
      [commentsSlice.name]: commentsReducer
    },
    devTools: true
  });

type Store = ReturnType<typeof makeStore>;
export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper(makeStore, { debug: true });
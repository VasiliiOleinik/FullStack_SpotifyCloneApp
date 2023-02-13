import { playerReducer } from './PlayerReducer';
import { combineReducers } from '@reduxjs/toolkit';
import { oneTrackReducer } from './OneTrackReducer';

export const rootReducer = combineReducers({
  playerReducer,
  oneTrackReducer
});

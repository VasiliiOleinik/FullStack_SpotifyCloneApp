import { createSlice } from '@reduxjs/toolkit';
import { PlayerState } from './types';
import { HYDRATE } from 'next-redux-wrapper';

const initialState: PlayerState = {
  pause: true,
  currentTime: 0,
  volume: 50,
  duration: 0,
  active: null
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlayerStopOrPlay: (state, {payload}) => {
      state.pause = payload;
    },
    setPlayerCurrentTime: (state, {payload}) => {
      state.currentTime = payload;
    },
    setPlayerVolume: (state, {payload}) => {
      state.volume = payload;
    },
    setPlayerDuration: (state, {payload}) => {
      state.duration = payload;
    },
    setPlayerActive: (state, { payload }) => {     
      state.active = payload;
      state.duration = 0;
      state.currentTime = 0;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const playerReducer = playerSlice.reducer;
export const playerActions = playerSlice.actions;
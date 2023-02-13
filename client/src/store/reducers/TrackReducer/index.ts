import { createSlice } from '@reduxjs/toolkit';
import { TrackState } from './types';
import { HYDRATE } from 'next-redux-wrapper';
import { getTracks } from '@/store/actions/getTracks';

const initialState: TrackState = {
  tracks: [],
  error: ''
};

export const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {},
  extraReducers: {
    [getTracks.pending]: state => {
      state.error = '';
    },
    [getTracks.fulfilled]: (state, action) => {
      state.error = "";
      state.tracks = action.payload;
    },
    [getTracks.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const trackReducer = trackSlice.reducer;
export const trackActions = trackSlice.actions;
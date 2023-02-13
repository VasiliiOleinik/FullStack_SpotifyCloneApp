import { createSlice } from '@reduxjs/toolkit';
import { TrackState } from './types';
import { HYDRATE } from 'next-redux-wrapper';
import { getTrack } from '@/store/actions/getTrack';

const initialState: TrackState = {
  track: {},
  error: ''
};

export const oneTrackSlice = createSlice({
  name: 'oneTrack',
  initialState,
  reducers: {},
  extraReducers: {
    [getTrack.pending]: state => {
      state.error = '';
    },
    [getTrack.fulfilled]: (state, action) => {
      state.error = "";
      state.track = action.payload;
    },
    [getTrack.rejected]: (state, action) => {
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

export const oneTrackReducer = oneTrackSlice.reducer;
export const oneTrackActions = oneTrackSlice.actions;
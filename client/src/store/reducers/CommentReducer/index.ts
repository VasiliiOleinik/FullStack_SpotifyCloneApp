import { addComment } from '@/store/actions/addComment';
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { Comments } from './types';

const initialState: Comments = {
  comments: [],
  error: ""
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [addComment.pending]: state => {
      state.error = '';
    },
    [addComment.fulfilled]: (state, action) => {
      state.error = "";
      state.comments.push(action.payload);
    },
    [addComment.rejected]: (state, action) => {
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

export const commentsReducer = commentsSlice.reducer;
export const commentsActions = commentsSlice.actions;
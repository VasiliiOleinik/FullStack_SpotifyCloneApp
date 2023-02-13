import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addComment = createAsyncThunk('comment/Add', async (props, thunkApi) => {
  const URL = process.env.API_URL;

  try {
    const { data } = await axios.post(`${URL}tracks/comment`, props);
    return data;
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});

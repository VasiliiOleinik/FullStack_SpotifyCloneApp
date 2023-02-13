import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTrack = createAsyncThunk('track/getOne', async (id, thunkApi) => {
  const URL = process.env.API_URL;

  try {
    const { data } = await axios.get(`${URL}tracks/${id}`);
    return data;
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});

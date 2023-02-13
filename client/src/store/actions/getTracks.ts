import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTracks = createAsyncThunk('track/getAll', async (_, thunkApi) => {
  const URL = process.env.API_URL;

  try {
    const {data} = await axios.get(`${URL}tracks`);
    return data;
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});

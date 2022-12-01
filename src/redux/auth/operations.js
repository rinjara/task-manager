import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const authAxiosInstance = axios.create({
  baseURL: 'https://goit-task-manager.herokuapp.com/',
});

const token = {
  set: token => {
    authAxiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset: () => {
    authAxiosInstance.defaults.headers.common.Authorization = '';
  },
};

export const registration = createAsyncThunk(
  'auth/registration',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await authAxiosInstance.post(
        '/users/signup',
        credentials
      );
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const currentToken = thunkAPI.getState().token;
      if (!currentToken) {
        return;
      }
      token.set(currentToken);
      const { data } = await authAxiosInstance.get('/users/me');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

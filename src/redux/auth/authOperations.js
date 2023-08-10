import axios from 'axios';
import { Notify } from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';

Notify.init({
  positions: 'top-center',
  timeout: 3000,
});

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const tokenControl = token => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    axios.defaults.headers.common.Authorization = '';
  }
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, tunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      tokenControl(data.token);
      Notify.success('Registration is successful');
      return data;
    } catch (err) {
      Notify.failure(err.message);
      return tunkAPI.rejectWithValue(err.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      tokenControl(data.token);
      Notify.success('Login is successful');
      return data;
    } catch (err) {
      Notify.failure(`Login error: ${err.message}`);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/logout');
    tokenControl(null);
    Notify.success('Logout is successful');
    return data;
  } catch (err) {
    Notify.failure(`Logout error: ${err.message}`);
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    tokenControl(persistedToken);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

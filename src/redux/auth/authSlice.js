import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshCurrentUser } from './authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isAuthorized: false,
  isRefreshed: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // reducers: {
  //   // setUser: (state, action) => {
  //   //   state.user = action.payload;
  //   // },
  //   // setToken: (state, action) => {
  //   //   state.token = action.payload;
  //   // },
  //   // setIsAuthorized: (state, action) => {
  //   //   state.isAuthorized = action.payload;
  //   // },
  //   // setIsRefreshed: (state, action) => {
  //   //   state.isRefreshed = action.payload;
  //   // },
  //   // setError: (state, action) => {
  //   //   state.error = action.payload;
  //   // },
  // },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;

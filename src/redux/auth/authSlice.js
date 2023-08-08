import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isAuthorized: false,
  isRefreshed: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // setUser: (state, action) => {
    //   state.user = action.payload;
    // },
    // setToken: (state, action) => {
    //   state.token = action.payload;
    // },
    // setIsAuthorized: (state, action) => {
    //   state.isAuthorized = action.payload;
    // },
    // setIsRefreshed: (state, action) => {
    //   state.isRefreshed = action.payload;
    // },
    // setError: (state, action) => {
    //   state.error = action.payload;
    // },
  },
});

export const authReducer = authSlice.reducer;

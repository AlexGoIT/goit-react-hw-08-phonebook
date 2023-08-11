import axios from 'axios';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      Notify.success(`Contacts count: ${data.length}`);
      return data;
    } catch (error) {
      Notify.success(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      Notify.success('Add contact is successful');
      return data;
    } catch (error) {
      Notify.success(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      Notify.success(`Contact id: ${contactId} deleted`);
      return contactId;
    } catch (error) {
      Notify.success(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setFilter = createAction('filter/setFilter');

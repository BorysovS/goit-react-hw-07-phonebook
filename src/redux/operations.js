import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64315148d4518cfb0e5ec9ad.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get('/contacts');
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const resp = await axios.post('/contacts', contact);
      return resp.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const resp = await axios.delete(`/contacts/${id}`, id);
      return resp.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

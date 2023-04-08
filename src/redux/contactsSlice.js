import { createSlice } from '@reduxjs/toolkit';
import initialContacts from '../components/InitialContacts/initialContacts.json';
import { nanoid } from 'nanoid';

const contactsInitialState = initialContacts;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      console.log(state);
      console.log(action);
      return (state = state.filter(contact => contact.id !== action.payload));
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addContacts, deleteContact } = contactsSlice.actions;

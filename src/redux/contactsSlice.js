import { createSlice } from '@reduxjs/toolkit';
// import initialContacts from '../components/InitialContacts/initialContacts.json';
import { nanoid } from 'nanoid';
import { addContact, fetchContacts, deleteContact } from './operations';

// const contactsInitialState = initialContacts;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: 'false',
    error: null,
  },
  reducers: {
    // addContacts: {
    //   reducer(state, action) {
    //     state.items.push(action.payload);
    //   },
    //   prepare(name, number) {
    //     return {
    //       payload: {
    //         name,
    //         number,
    //         id: nanoid(),
    //       },
    //     };
    //   },
    // },
    // deleteContact(state, action) {
    //   console.log(state);
    //   console.log(action);
    //   return (state = state.filter(contact => contact.id !== action.payload));
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
        state.error = null;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const indexContact = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(indexContact, 1);
        state.error = null;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

// export const { addContacts, deleteContact } = contactsSlice.actions;

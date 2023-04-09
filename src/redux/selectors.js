import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectFiltered = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectVisibleContact = createSelector(
  [selectContacts, selectFiltered],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

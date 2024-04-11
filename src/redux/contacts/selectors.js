import { selectFilter } from '../filters/selectors';
import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (filter === '') {
      return contacts;
    }
    const filteredContacts = contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter) ||
        contact.number.includes(filter)
    );
    return filteredContacts;
  }
);

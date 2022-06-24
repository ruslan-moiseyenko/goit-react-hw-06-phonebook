import { createAction } from '@reduxjs/toolkit';

const ADD_CONTACT = 'contacts/ADD_CONTACT';
const DELITE_CONTACT = 'contacts/DELITE_CONTACT';
const FILTER_CHANGE = 'filter/FILTER_CHANGE';

export const addContact = createAction(ADD_CONTACT);

export const deliteContact = createAction(DELITE_CONTACT);

export const onFilterChange = createAction(FILTER_CHANGE);

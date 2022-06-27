import { configureStore } from '@reduxjs/toolkit';
import contactsInitial from '../components/phonebookAddingForm/contacts.json';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deliteContact, onFilterChange } from '../redux/actions';

const contacts = localStorage.getItem('contacts');

const initialState = {
  contacts: contacts ? JSON.parse(contacts) : contactsInitial,
  filter: '',
};

const reducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    if (
      state.contacts.some(
        ({ name }) => name.toLowerCase() === action.payload.name.toLowerCase()
      )
    ) {
      alert(`${action.payload.name} is already in contacts`);
      return;
    } else {
      localStorage.setItem(
        'contacts',
        JSON.stringify([...state.contacts, action.payload])
      );
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }
  },

  [deliteContact]: (state, action) => {
    localStorage.setItem(
      'contacts',
      JSON.stringify(
        state.contacts.filter(contact => contact.id !== action.payload)
      )
    );

    return {
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== action.payload),
    };
  },
  [onFilterChange]: (state, action) => {
    return {
      ...state,
      filter: action.payload,
    };
  },
});

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;

import { configureStore } from '@reduxjs/toolkit';
import contactsInitial from '../components/phonebookAddingForm/contacts.json';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deliteContact, onFilterChange } from '../redux/actions';

const contacts = localStorage.getItem('contacts');
const initialState = {
  contacts: contacts ? JSON.parse(contacts) : contactsInitial,
  filter: '',
  filteredNames: contactsInitial,
};

const reducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    if (state.contacts.some(contact => contact.name === action.payload.name)) {
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
      filter: action.payload.target.value,
    };
  },
});

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import contactsInitial from '../components/phonebookAddingForm/contacts.json';

const contacts = localStorage.getItem('contacts');
const initialState = {
  contacts: contacts ? JSON.parse(contacts) : contactsInitial,
  filter: '',
  filteredNames: contactsInitial,
};

const reducer = (state = initialState, action) => {
  // console.log('The State Is:', state);
  switch (action.type) {
    case 'contacts/ADD_CONTACT':
      if (
        state.contacts.some(contact => contact.name === action.payload.name)
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

    case 'contacts/DELITE_CONTACT':
      localStorage.setItem(
        'contacts',
        JSON.stringify(
          state.contacts.filter(contact => contact.id !== action.payload)
        )
      );

      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case 'filter/FILTER_CHANGE':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

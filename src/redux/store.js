import { configureStore } from '@reduxjs/toolkit';
import contactsInitial from '../components/phonebookAddingForm/contacts.json';

const initialState = {
  contacts: contactsInitial,
  filter: '',
};

const reducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case 'contacts/ADD_CONTACT':
      return { contacts: [...state.contacts, action.payload] };
    case 'contacts/DELITE_CONTACT':
      return {
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case 'filter/FILTER_CHANGE':
      return { filter: action.payload };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    contacts: reducer,
    filter: reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

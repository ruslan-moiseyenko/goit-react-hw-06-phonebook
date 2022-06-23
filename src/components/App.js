import React from 'react';
import { connect } from 'react-redux';
import PhonebookAddingForm from './phonebookAddingForm/phonebookAddingForm';
import Contacts from './contacts/contacts';
import Filter from './filter/Filter';
import * as actions from '../redux/actions';
// import contactsInitial from './phonebookAddingForm/contacts.json';

function App({ onSubmit, onChange, onDeliteContact, filteredNames, filter }) {
  // const [contacts, setContacts] = useState(contactsInitial);
  // const [filter, setFilter] = useState('');

  // const handleFilter = event => {
  //   setFilter(event.target.value);
  // };

  // useEffect(() => {
  //   const contacts = localStorage.getItem('contacts');
  //   contacts ? setContacts(JSON.parse(contacts)) : setContacts(contactsInitial);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const submitHandler = data => {
  //   if (checkNameForMathces(data.name)) {
  //     alert(`${data.name} is already in contacts`);
  //     return;
  //   } else {
  //     setContacts(prevContacts => [...prevContacts, data]);
  //   }
  // };

  // const checkNameForMathces = name => {
  //   return contacts.some(contact => contact.name === name);
  // };

  // const deliteContactsItem = id => {
  //   setContacts(contacts.filter(contact => contact.id !== id));
  // };

  // const normalizedFilter = filter.toLowerCase();
  // const filteredNames = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(normalizedFilter)
  // );

  return (
    <>
      <h1>Phonebook</h1>
      <PhonebookAddingForm onSubmit={onSubmit} />
      <h2>Contacts</h2>
      <Filter onChange={onChange} filterValue={filter} />
      <Contacts contacts={filteredNames} onDeliteContact={onDeliteContact} />
    </>
  );
}

const mapStateToProps = state => {
  console.log(' state Filter: ', state.filter);
  console.log(' state : ', state);
  return {
    contacts: state.contacts,
    filteredNames: state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(state.filter)
    ),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: data => dispatch(actions.addContact(data)),
    onDeliteContact: id => dispatch(actions.deliteContact(id)),
    onChange: event => dispatch(actions.onFilterChange(event)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

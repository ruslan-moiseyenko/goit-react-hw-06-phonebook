import React from 'react';
import { connect } from 'react-redux';
import PhonebookAddingForm from './phonebookAddingForm/phonebookAddingForm';
import Contacts from './contacts/contacts';
import Filter from './filter/Filter';
import * as actions from '../redux/actions';

function App({
  onSubmit,
  onChange,
  onDeliteContact,
  filteredNames,
  filter = '',
}) {
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
  return {
    contacts: state.contacts,
    filteredNames: state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(state.filter)
    ),
    filter: state.filter,
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

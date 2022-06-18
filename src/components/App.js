import React, { useState, useEffect } from 'react';
import PhonebookAddingForm from './phonebookAddingForm/phonebookAddingForm';
import Contacts from './contacts/contacts';
import Filter from './filter/Filter';
import contactsInitial from './phonebookAddingForm/contacts.json';

export default function App() {
  const [contacts, setContacts] = useState(contactsInitial);
  const [filter, setFilter] = useState('');

  const handleFilter = event => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    contacts ? setContacts(JSON.parse(contacts)) : setContacts(contactsInitial);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const submitHandler = data => {
    if (checkNameForMathces(data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    } else {
      setContacts(prevContacts => [...prevContacts, data]);
    }
  };

  const checkNameForMathces = name => {
    return contacts.some(contact => contact.name === name);
  };

  const deliteContactsItem = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredNames = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <h1>Phonebook</h1>
      <PhonebookAddingForm onSubmit={submitHandler} />
      <h2>Contacts</h2>
      <Filter onChange={handleFilter} filterValue={filter} />
      <Contacts contacts={filteredNames} onDeliteContact={deliteContactsItem} />
    </>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import { LiContacts } from './Contacts.styled';

const Contacts = ({ contacts, onDeliteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <LiContacts key={id}>
          {name} : {number}
          <button onClick={() => onDeliteContact(id)}> Delite</button>
        </LiContacts>
      ))}
    </ul>
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

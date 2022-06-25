import React from 'react';
import PropTypes from 'prop-types';
import { LiContacts } from './Contacts.styled';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

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

const mapStateToProps = state => {
  return {
    contacts: state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(state.filter.toLowerCase())
    ),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeliteContact: id => dispatch(actions.deliteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

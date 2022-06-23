export const addContact = value => ({
  type: 'contacts/ADD_CONTACT',
  payload: value,
});

export const deliteContact = value => ({
  type: 'contacts/DELITE_CONTACT',
  payload: value,
});

export const onFilterChange = event => ({
  type: 'filter/FILTER_CHANGE',
  payload: event.target.value,
});

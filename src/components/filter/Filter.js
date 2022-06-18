import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ onChange, filterValue }) => {
  return (
    <div>
      <label>
        Filter by name:
        <input type="text" onChange={onChange} value={filterValue} />
      </label>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};

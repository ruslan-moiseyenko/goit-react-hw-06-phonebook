import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import PropTypes from 'prop-types';

const Filter = ({ onChange, filterValue = '' }) => {
  return (
    <div>
      <label>
        Filter by name:
        <input
          type="text"
          onChange={e => onChange(e.target.value)}
          value={filterValue}
        />
      </label>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filterValue: state.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: value => dispatch(actions.onFilterChange(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};

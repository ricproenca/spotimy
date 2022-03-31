import React from 'react';
import PropTypes from 'prop-types';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './CheckboxItem.css'

const CheckboxItem = ({ checkboxValue, checkboxLabel, checked, checkboxChangeCallback }) => {
  const handleCheckboxChange = (event) => checkboxChangeCallback(event.target.checked);

  return (
    <FormControlLabel
      className="checkbox-item"
      control={
        <Checkbox
          checked={checked}
          onChange={handleCheckboxChange}
          value={checkboxValue}
        />
      }
      label={checkboxLabel}
    />
  )
}

export default CheckboxItem;

CheckboxItem.propTypes = {
  checkboxLabel: PropTypes.string.isRequired,
  checkboxValue: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  handleCheckboxChange: PropTypes.func,
};

CheckboxItem.defaultProps = {
  handleCheckboxChange: null
};

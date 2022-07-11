import React, { useCallback, useEffect, useState } from 'react';
import FormGroup from '@mui/material/FormGroup';

import CheckboxItem from './CheckboxItem';
import './CheckboxGroup.css'

const CheckboxGroup = ({checkboxes, onCheckboxGroupChange}) => {
  const [parentCheckboxChecked, setParentCheckboxChecked] = useState(false)

  const toggleAllChecked = useCallback(checkboxes => {
    let isAllChecked = false;

    for (let i = 0; i < checkboxes.length; i += 1) {
      if (checkboxes[i].checked) {
        isAllChecked = true;
      } else {
        isAllChecked = false;
        break;
      }
    }

    return isAllChecked;
  }, [checkboxes])

  useEffect(() => {
    const isAllChecked = toggleAllChecked(checkboxes)
    setParentCheckboxChecked(isAllChecked)
  }, [parentCheckboxChecked])

  const handleParentCheckboxChange = () => {
    const newCheckState = checkboxes.map((checkbox) => ({
      ...checkbox,
      checked: !parentCheckboxChecked
    }));

    setParentCheckboxChecked(!parentCheckboxChecked);
    onCheckboxGroupChange(newCheckState);
  };

  const handleChildCheckboxChange = (isChecked, index) => {
    const newCheckState = checkboxes.map(
      (aCheckbox, i) => (index === i ? { ...aCheckbox, checked: isChecked } : aCheckbox)
    );

    onCheckboxGroupChange(newCheckState);
  };

  const renderCheckboxes = () => {
    if (!checkboxes) {
      return null;
    }

    return checkboxes.map((aCheckbox, index) => (
      <CheckboxItem
        key={index}
        checkboxLabel={aCheckbox.label}
        checkboxValue={aCheckbox.value}
        checked={aCheckbox.checked}
        checkboxChangeCallback={(checkStatus) => handleChildCheckboxChange(checkStatus, index)}
      />
    ));
  };

  return (
    <div className="checkbox-container">
      <CheckboxItem
        checkboxLabel="All"
        checkboxValue="all"
        checked={parentCheckboxChecked}
        checkboxChangeCallback={handleParentCheckboxChange}
      />
      {renderCheckboxes()}
    </div>
  )
}

export default CheckboxGroup;

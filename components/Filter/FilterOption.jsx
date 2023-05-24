"use client";

import React, { useState } from "react";

const FilterOption = ({ option, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    setIsChecked(checked);
    onChange(option, checked);
  };

  return (
    <div className="filter-option">
      <div className="filter-option-text">{option}</div>

      <label className="custom-checkbox">
        <input type="checkbox" onChange={handleCheckboxChange} />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default FilterOption;

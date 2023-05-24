"use client";

import React, { useState } from "react";

const FilterOption = ({ option }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
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

import React from "react";

const FilterOption = ({ option, checkedOptions, setCheckedOptions }) => {
  const handleOptionChange = (option) => {
    if (checkedOptions.includes(option)) {
      setCheckedOptions(checkedOptions.filter((item) => item !== option));
    } else {
      setCheckedOptions([...checkedOptions, option]);
    }
  };

  return (
    <div className="filter-option">
      <div className="filter-option-text">{option}</div>

      <label className="custom-checkbox">
        <input
          type="checkbox"
          value={option}
          checked={checkedOptions.includes(option)}
          onChange={() => handleOptionChange(option)}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default FilterOption;

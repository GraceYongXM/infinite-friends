"use client";

import React, { useState } from "react";

import Image from "next/image";

import XIcon from "../../assets/x.png";
import FilterOption from "./FilterOption";

const FriendFilter = ({ onClose, onApply, checkedFriendOptions }) => {
  const [checkedOptions, setCheckedOptions] = useState(checkedFriendOptions);

  const handleClose = () => {
    onClose();
  };

  const handleApply = () => {
    onApply(checkedOptions);
    onClose();
  };

  const handleClearAll = () => {
    setCheckedOptions([]);
  };

  return (
    <div className="filter-modal">
      <div className="filter-header">
        <button
          className={`filter-modal-clear ${
            checkedOptions.length > 0 ? "checked" : ""
          }`}
          onClick={handleClearAll}
        >
          Clear all
        </button>
        <div className="filter-word">Filter</div>
        <button className="close-button" onClick={handleClose}>
          <Image src={XIcon} alt="X" width={11} height={11} />
        </button>
      </div>
      <div className="filter-body">
        <div className="filter-status">Friend Status</div>
        <FilterOption
          option="Close Friends"
          checkedOptions={checkedOptions}
          setCheckedOptions={setCheckedOptions}
        />
        <FilterOption
          option="Super Close Friends"
          checkedOptions={checkedOptions}
          setCheckedOptions={setCheckedOptions}
        />

        <button className="apply-filter" onClick={handleApply}>
          <div className="apply">Apply</div>
        </button>
      </div>
    </div>
  );
};

export default FriendFilter;

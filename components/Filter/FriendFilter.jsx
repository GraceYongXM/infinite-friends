"use client"

import React, { useState } from "react";

import Image from "next/image";

import XIcon from "../../assets/x.png";
import FilterOption from "./FilterOption";

const FriendFilter = ({ onClose }) => {
  const [checkedOptions, setCheckedOptions] = useState([]);

  const handleOptionsChange = (option, isChecked) => {
    if (isChecked) {
      setCheckedOptions((prevOptions) => [...prevOptions, option]);
    } else {
      setCheckedOptions((prevOptions) =>
        prevOptions.filter((prevOption) => prevOption !== option)
      );
    }
  };

  const handleClose = () => {
    onClose();
  }

  return (
    <div className="filter-modal">
      <div className="filter-header">
        <button className={`filter-modal-clear ${checkedOptions.length > 0 ? 'checked' : ''}`}>Clear all</button>
        <div className="filter-word">Filter</div>
        <button className="close-button" onClick={handleClose}>
          <Image src={XIcon} alt="X" width={11} height={11} />
        </button>
      </div>
      <div className="filter-body">
        <div className="filter-status">Friend Status</div>
        <FilterOption option="Close Friends" onChange={handleOptionsChange} />
        <FilterOption option="Super Close Friends" onChange={handleOptionsChange} />

        <button className="apply-filter">
          <div className="apply">Apply</div>
        </button>
      </div>
    </div>
  );
};

export default FriendFilter;

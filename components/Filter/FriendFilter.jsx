import React from "react";

import Image from "next/image";

import XIcon from "../../assets/x.png";
import FilterOption from "./FilterOption";

const FriendFilter = () => {
  return (
    <div className="filter-modal">
      <div className="filter-header">
        <button className="filter-modal-clear">Clear All</button>
        <div className="filter-word">Filter</div>
        <button className="close-button">
          <Image src={XIcon} alt="X" width={11} height={11} />
        </button>
      </div>
      <div className="filter-body">
        <div className="filter-status">Friend Status</div>
        <FilterOption option="Close Friends" />
        <FilterOption option="Super Close Friends" />

        <button className="apply-filter">
          <div className="apply">Apply</div>
        </button>
      </div>
    </div>
  );
};

export default FriendFilter;

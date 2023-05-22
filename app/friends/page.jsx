import React from "react";

import Image from "next/image";

import Header from "@component/components/Header";
import Sidebar from "@component/components/Sidebar";
import FilterIcon from "../../assets/filter.png";

const FriendPage = () => {
  return (
    <>
      <Sidebar page="friends" />
      <Header page="Friends" />
      <div className="friends">
        <div className="filter-rect">
          <button className="filter-button">
            <Image className="filter-icon" src={FilterIcon} alt="Filter Icon" />
          </button>

          <div className="filter-clear">
            Clear all
          </div>
        </div>

        <div>list of friends</div>
      </div>
    </>
  );
};

export default FriendPage;

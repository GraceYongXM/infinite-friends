import React from "react";

import Image from "next/image";

import Header from "@component/components/Header";
import Sidebar from "@component/components/Sidebar";
import FilterIcon from "../../assets/filter.svg";

const FriendPage = () => {
  return (
    <>
      <Sidebar page="friends"/>
      <Header page="Friends"/>
      <div className="friends">
        <button className="filter-button">
            <Image src={FilterIcon} alt="Filter Icon" />
        </button>

        <div>
            list of friends
        </div>
      </div>
    </>
  );
};

export default FriendPage;

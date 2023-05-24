"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";

import Header from "@component/components/Header";
import Sidebar from "@component/components/Sidebar";
import FilterIcon from "../../assets/filter.png";
import FriendTile from "@component/components/Friends/FriendTile";
import FriendFilter from "@component/components/Filter/FriendFilter";
import ClearAllButton from "@component/components/Filter/ClearAllButton";

const FriendPage = () => {
  const [friends, setFriends] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [showFilterModal, setShowFilterModel] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchFriends = async () => {
      try {
        const response = await fetch("/friendsData.json");
        console.log("response", response);
        const data = await response.json();
        setFriends(data.friends);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchFriends();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!friends) return <p>No profile data</p>;
  if (friends) {
    return (
      <>
        <Sidebar page="friends" />
        <Header page="Friends" />
        <div className="friends">
          <div className="filter-rect">
            <button className="filter-button">
              <Image
                className="filter-icon"
                src={FilterIcon}
                alt="Filter Icon"
              />
            </button>

            {showFilterModal && <FriendFilter />}

            <button className="filter-clear-border">Clear All</button>
            {/* <div className="filter-line"></div> */}
          </div>

          <div className="friends-list">
            {friends.map((friend) => (
              <FriendTile friend={friend} />
            ))}
          </div>
        </div>
      </>
    );
  }
};

export default FriendPage;

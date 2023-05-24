"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";

import Header from "@component/components/Header";
import Sidebar from "@component/components/Sidebar";
import FilterIcon from "../../assets/filter.png";
import FilterSelectedIcon from "../../assets/filter-selected.png";
import FriendTile from "@component/components/Friends/FriendTile";
import FriendFilter from "@component/components/Filter/FriendFilter";
import ClearAllButton from "@component/components/Filter/ClearAllButton";

const FriendPage = () => {
  const [friends, setFriends] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isButtonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(!isButtonClicked);
  };

  const handleCloseModal = () => {
    setButtonClicked(!isButtonClicked);
  }

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
            <button className={`filter-button ${isButtonClicked ? 'selected' : ''}`} onClick={handleButtonClick}>
              <Image
                className="filter-icon"
                src={isButtonClicked ? FilterSelectedIcon : FilterIcon}
                alt={isButtonClicked ? "Selected Filter Icon" : "Filter Icon"}
              />
            </button>

            {isButtonClicked && <FriendFilter onClose={handleCloseModal} />}

            <button className="filter-clear-border">Clear all</button>
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

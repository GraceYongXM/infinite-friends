"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";

import Header from "@component/components/Header";
import Sidebar from "@component/components/Sidebar";
import FilterIcon from "../../assets/filter.png";

// import FriendsData from "../../public/friendsData.jon";

const FriendPage = () => {
  const [friends, setFriends] = useState(null);
  const [isLoading, setLoading] = useState(false);

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

            <div className="filter-clear">Clear all</div>
          </div>

          <div className="friends-list">
            <div>
              {friends.map((friend) => (
                <div>{friend.name}</div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default FriendPage;

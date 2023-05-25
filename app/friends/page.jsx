"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";

import FilterIcon from "../../assets/filter.png";
import FilterSelectedIcon from "../../assets/filter-selected.png";
import FriendTile from "@component/components/Friends/FriendTile";
import FriendFilter from "@component/components/Filter/FriendFilter";
import Loading from "@component/components/Loading";

const FriendPage = () => {
  const [friends, setFriends] = useState([]);
  const [checkedOptions, setCheckedOptions] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isButtonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchFriends();
  }, []);

  useEffect(() => {
    if (checkedOptions.length > 0) {
      setIsFiltered(true);
    } else {
      setIsFiltered(false);
    }
  }, checkedOptions);

  const fetchCloseFriends = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await fetch("/closeFriendsData.json");
      // console.log("response", response);
      const data = await response.json();
      setFriends(data.friends);
      setIsFiltered(true);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching close friends data:", error);
    }
  };

  const fetchSuperCloseFriends = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await fetch("/superCloseFriendsData.json");
      // console.log("response", response);
      const data = await response.json();
      setFriends(data.friends);
      setIsFiltered(true);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching super close friends data:", error);
    }
  };

  const fetchCloseAndSuperCloseFriends = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await fetch("/closeAndSuperCloseFriendsData.json");
      // console.log("response", response);
      const data = await response.json();
      setFriends(data.friends);
      setIsFiltered(true);
      setLoading(false);
    } catch (error) {
      console.error(
        "Error fetching close and super close friends data:",
        error
      );
    }
  };

  const fetchFriends = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await fetch("/friendsData.json");
      // console.log("response", response);
      const data = await response.json();
      setFriends(data.friends);
      setIsFiltered(false);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching friends data:", error);
    }
  };

  const handleButtonClick = () => {
    setButtonClicked(!isButtonClicked);
  };

  const handleCloseModal = () => {
    setButtonClicked(!isButtonClicked);
  };

  const handleApplyFilter = (selectedOptions) => {
    setCheckedOptions(selectedOptions);
    if (
      selectedOptions.includes("Close Friends") &&
      selectedOptions.includes("Super Close Friends")
    ) {
      fetchCloseAndSuperCloseFriends();
    } else if (selectedOptions.length == 0) {
      fetchFriends();
    } else {
      if (selectedOptions.includes("Close Friends")) {
        fetchCloseFriends();
      }
      if (selectedOptions.includes("Super Close Friends")) {
        fetchSuperCloseFriends();
      }
    }
  };

  if (friends) {
    return (
      <>
        <div className="friends">
          <div className="filter-rect">
            <button
              className={`filter-button ${isButtonClicked ? "selected" : ""} ${
                isFiltered ? "filtered" : ""
              }`}
              onClick={handleButtonClick}
            >
              <Image
                className={`filter-icon ${isFiltered ? "filtered" : ""}`}
                src={
                  isButtonClicked || isFiltered
                    ? FilterSelectedIcon
                    : FilterIcon
                }
                alt={
                  isButtonClicked || isFiltered
                    ? "Selected Filter Icon"
                    : "Filter Icon"
                }
              />
              <div className="apply">{isFiltered && checkedOptions.length}</div>
            </button>

            {isButtonClicked && (
              <FriendFilter
                onClose={handleCloseModal}
                onApply={handleApplyFilter}
                checkedFriendOptions={checkedOptions}
              />
            )}

            <button
              className={`filter-clear-border ${isFiltered ? "checked" : ""}`}
              onClick={fetchFriends}
            >
              Clear all
            </button>
          </div>

          {isLoading ? (
            <div className="friends-list">
              {[...Array(10).keys()].map((i) => (
                <Loading key={i} />
              ))}
            </div>
          ) : (
            <div className="friends-list">
              {friends.map((friend) => (
                <FriendTile key={friend.name} friend={friend} />
              ))}
            </div>
          )}
        </div>
      </>
    );
  }
};

export default FriendPage;

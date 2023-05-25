import React from "react";

import Link from "next/link";

import FriendCloseness from "./FriendCloseness";

const FriendTile = ({ friend }) => {
  return (
    <Link className="friends-tile" href={`friends/${friend.name}`} friendName={friend.name}>
      <div className="friends-title">
        <div className="friends-name">{friend.name}</div>
        <FriendCloseness degree={friend.closeness} />
      </div>

      <div className="friends-info">
        <div>{friend.email}</div>
        <span className="dot">·</span>
        <div>{friend.phone}</div>
      </div>
    </Link>
  );
};

export default FriendTile;

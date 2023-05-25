import React from "react";
import FriendCloseness from "./FriendCloseness";
import Link from "next/link";

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

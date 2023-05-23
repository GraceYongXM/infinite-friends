import React from "react";
import FriendCloseness from "./FriendCloseness";

const FriendTile = ({ friend }) => {
  return (
    <div className="friends-tile">
      <div className="friends-title">
        <div className="friends-name">{friend.name}</div>
        <FriendCloseness degree={friend.closeness} />
      </div>

      <div className="friends-info">
        <div>{friend.email}</div>
        <span className="dot">·</span>
        <div>{friend.phone}</div>
      </div>
    </div>
  );
};

export default FriendTile;

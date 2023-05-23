import React from "react";

const FriendCloseness = ({ degree }) => {
  const closenessStyleEnum = {
    0: "",
    1: "close-friends",
    2: "super-close-friends",
  };
  const closenessTextEnum = {
    0: "",
    1: "Close Friends",
    2: "Super Close Friends",
  };

  const closenessStyle = closenessStyleEnum[degree];
  const closenessText = closenessTextEnum[degree];

  return <div className={closenessStyle}>{closenessText}</div>;
};

export default FriendCloseness;

"use client";

import { useEffect, useState } from "react";
import FriendsData from "../../../public/friendsData.json";
import FriendTile from "@component/components/Friends/FriendTile";

const FriendPage = ({ params: { name } }) => {
  const data = FriendsData.friends;
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    const filterDataByName = (data, name) => {
      return data.filter((item) =>
        item.name.toLowerCase().includes(name.toLowerCase())
      );
    };
    // console.log(name.replace("%20", " "));
    // console.log(data)
    const friendName = name.replace("%20", " ");
    const result = filterDataByName(data, friendName);
    setFilteredData(result);
  }, []);

  return (
    <div className="friends">
      {/* <FriendTile key={filteredData[0].name} friend={filteredData[0].name} /> */}
      {filteredData && <FriendTile key={filteredData[0].name} friend={filteredData[0]} />}
    </div>
  );
};

export default FriendPage;

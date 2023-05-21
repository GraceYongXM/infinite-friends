import Header from "@component/components/Header";
import Sidebar from "@component/components/Sidebar";
import React from "react";

const FriendPage = () => {
  return (
    <>
      <Sidebar page="friends"/>
      <Header page="Friends"/>
      <div>FriendPage</div>
    </>
  );
};

export default FriendPage;

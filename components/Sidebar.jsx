"use client"

import "../app/globals.css";

import LogoPng from "../assets/logo-png.png";
import FriendsIconPng from "../assets/friends-png.png";
import HomeIconPng from "../assets/home-png.png";
import SidebarTab from "./SidebarTab";
import Image from "next/image";
import { useEffect, useState } from "react";

const Sidebar = ({ page }) => {
  const [isHome, setIsHome] = useState(false);
  const [isFriends, setIsFriends] =  useState(false);

  useEffect(() => {
    if (page == "home") {
      setIsHome(true);
      console.log("home");
    } else if (page == "friends") {
      console.log("friends");
      setIsFriends(true);
    }
  })

  return (
    <aside className="sidebar">
      <nav>
        <div className="sidebar-header">
          <div className="sidebar-tab">
            <Image className="sidebar-title-icon" src={LogoPng}></Image>
            <div className="sidebar-text sidebar-title">Clerkie Challenge</div>
          </div>
        </div>

        <SidebarTab icon={HomeIconPng} link="" text="Home" selected={isHome}/>
        <SidebarTab icon={FriendsIconPng} link="friends" text="Friends" selected={isFriends}/>
      </nav>
    </aside>
  );
};

export default Sidebar;

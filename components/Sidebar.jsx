"use client"

import "../app/globals.css";

import Logo from "../assets/logo.svg";
import FriendsIcon from "../assets/friends.svg";
import HomeIcon from "../assets/home.svg";
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
            <Image className="sidebar-title-icon" src={Logo}></Image>
            <div className="sidebar-text sidebar-title">Clerkie Challenge</div>
          </div>
        </div>

        <SidebarTab icon={HomeIcon} link="" text="Home" selected={isHome}/>
        <SidebarTab icon={FriendsIcon} link="friends" text="Friends" selected={isFriends}/>
      </nav>
    </aside>
  );
};

export default Sidebar;

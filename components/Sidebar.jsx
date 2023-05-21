import "../app/globals.css";

import Logo from "../assets/logo.svg";
import FriendsIcon from "../assets/friends.svg";
import HomeIcon from "../assets/home.svg";
import SidebarTab from "./SidebarTab";
import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <div className="header">
          <div className="sidebar-tab">
            <Image className="sidebar-title-icon" src={Logo}></Image>
            <div className="sidebar-text sidebar-title">Clerkie Challenge</div>
          </div>
        </div>

        <SidebarTab icon={HomeIcon} text="Home" />
        <SidebarTab icon={FriendsIcon} text="Friends" />

        {/* <Image className="sidebar-icon" src={HomeIcon}></Image>
        <Link className="sidebar-tab" href="/">Home</Link>
        <Image className="sidebar-icon" src={FriendsIcon}></Image>
        <Link href="/">Friends</Link> */}
      </nav>
    </aside>
  );
};

export default Sidebar;

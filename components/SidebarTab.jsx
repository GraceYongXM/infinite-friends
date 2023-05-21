import Image from "next/image";

const SidebarTab = ({ icon, text }) => {
  return (
    // how to use 2 css classes tgt
    <div className="sidebar-tab">
      <Image className="sidebar-tab-icon" src={icon}></Image>
      <div className="sidebar-text sidebar-tab-text">{text}</div>
    </div>
  );
};

export default SidebarTab;

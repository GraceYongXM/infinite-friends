import Image from "next/image";
import Link from "next/link";

const SidebarTab = ({ icon, link, text, selected }) => {
  const className = selected ? "sidebar-tab selected" : "sidebar-tab";

  return (
    <div className={className}>
      <Image className="sidebar-tab-icon" src={icon} alt={text}></Image>
      <Link className="sidebar-text sidebar-tab-text" href={link}>
        {text}
      </Link>
    </div>
  );
};

export default SidebarTab;

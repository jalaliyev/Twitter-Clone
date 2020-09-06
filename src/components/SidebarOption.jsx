import React from "react";
import "../Style/SidebarOption.css";

function SidebarOptions({ active, text, Icon }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption_active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOptions;

// SideNavLayout.jsx
import React from "react";
import SideNav from "../components/SideNav";

const SideNavLayout = ({ children }) => {
  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default SideNavLayout;

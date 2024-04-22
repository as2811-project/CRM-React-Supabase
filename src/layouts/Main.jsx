// MainLayout.jsx
import React from "react";
import NavBar from "./components/NavBar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default MainLayout;

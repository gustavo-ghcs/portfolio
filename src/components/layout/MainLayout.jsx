import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const MainLayout = ({ children, activeTab, setActiveTab }) => {
  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        {children}
      </div>
    </main>
  );
};

export default MainLayout;

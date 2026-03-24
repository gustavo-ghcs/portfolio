import React, { useState } from "react";
import MainLayout from "./components/layout/MainLayout";
import About from "./components/sections/About";
import Resume from "./components/sections/Resume";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";
import Preloader from "./components/Preloader";
import "./assets/css/style.css";

function App() {
  const [activeTab, setActiveTab] = useState("sobre");

  const renderSection = () => {
    switch (activeTab) {
      case "sobre":
        return <About />;
      case "resumo":
        return <Resume />;
      case "portfolio":
        return <Portfolio />;
      case "contato":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <Preloader />
      <MainLayout activeTab={activeTab} setActiveTab={setActiveTab}>
        {renderSection()}
      </MainLayout>
    </>
  );
}

export default App;

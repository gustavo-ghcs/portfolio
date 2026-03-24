import React from "react";

const Navbar = ({ activeTab, setActiveTab }) => {
  const navItems = ["Sobre", "Resumo", "Portfólio", "Contato"];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => {
          const tabId = item.toLowerCase().replace("ó", "o");
          return (
            <li className="navbar-item" key={item}>
              <button
                className={`navbar-link ${activeTab === tabId ? "active" : ""}`}
                onClick={() => setActiveTab(tabId)}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import "./Sidebar.css";

const Sidebar = ({ title, items, onSectionChange, defaultActive }) => {
    const [activeSection, setActiveSection] = useState(
      defaultActive || items[0]?.id
    );

    const handleSectionClick = (sectionId) => {
      setActiveSection(sectionId);
      if (onSectionChange) {
        onSectionChange(sectionId);
      }
    };



  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <div className="sidebar-header">
          <h2 className="sidebar-title">{title}</h2>
        </div>
        <nav className="sidebar-nav">
          <ul className="sidebar-nav-list">
            {items.map((item) => (
              <li key={item.id} className="sidebar-nav-list-item">
                <button
                  onClick={() => handleSectionClick(item.id)}
                  className={`sidebar-nav-list-item-button ${activeSection === item.id ? 'sidebar-nav-list-item-button-active' : ''}`}
                >
                    {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
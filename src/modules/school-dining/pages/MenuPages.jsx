// pages/MenuPages.jsx
import React from "react";
import MenuHero from "../components/MenuHero";
import MenuList from "../components/MenuList";
import { menuHeroData } from "../data/menuHeroData";
import { menuData } from "../data/menuData";
import CalendarSection from "../components/CalendarSection";

const MenuPages = () => {
  return (
    <div className="menu-pages">
      <MenuHero {...menuHeroData} />
      <MenuList menuItems={menuData} />
      <CalendarSection />
    </div>
  );
};

export default MenuPages;

import React from "react";
import MenuCard from "../styles/menuCard.css";

const MenuList = ({ menuItems = [] }) => {
  return (
    <section className="weekly-menu">
      <div className="weekly-menu__container">
        <div className="weekly-menu__grid">
          {menuItems.map((item) => (
            <MenuCard
              key={item.id}
              day={item.day}
              title={item.title}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuList;

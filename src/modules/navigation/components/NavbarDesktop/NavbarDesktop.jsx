import React from "react";
import ItemNavbar from "../../../../modules/core/design-system/ItemNavbar/ItemNavbar";
import { menuItems } from "../../data/menuItems";

const NavbarDesktop = () => (
  <nav className="navbar">
    <ul className="navbar-ul">
      {menuItems.map((item) => (
        <ItemNavbar
          key={item.id}
          route={item.route}
          content={item.content}
          dropdownItemns={item.dropdown}
        />
      ))}
    </ul>
  </nav>
);

export default NavbarDesktop;

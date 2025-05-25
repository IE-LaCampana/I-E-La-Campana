import React from "react";
import "../Header/header.css";

const Header = ({ children }) => {
  return <header className="header-app">{children}</header>;
};

export default Header;

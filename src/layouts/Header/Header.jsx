import React from "react";
import "./Header.css";

const Header = ({ children }) => {
  return <header className="header-app">{children}</header>;
};

export default Header;

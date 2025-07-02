import React, { useState } from "react";
import NavbarDesktop from "../../modules/navigation/components/NavbarDesktop/NavbarDesktop";
import NavbarMobile from "../../modules/navigation/components/NavbarMobile/NavbarMobile";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? "hidden" : "";
  };

  return (
    <>
      <NavbarDesktop />
      <button
        className={`hamburger-menu ${mobileMenuOpen ? "hidden" : ""}`}
        onClick={toggleMobileMenu}
      >
        <i className="bi bi-list"></i>
      </button>
      <NavbarMobile isOpen={mobileMenuOpen} toggleMenu={toggleMobileMenu} />
    </>
  );
};

export default Navbar;

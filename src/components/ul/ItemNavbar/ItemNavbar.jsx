import React, { useEffect, useRef, useState } from 'react' 
import { NavLink } from 'react-router-dom' 
import "./ItemNavbar.css"; 
 
const ItemNavbar = ({ route, content, dropdownItemns }) => {   
 
    const [isOpen, setIsOpen] = useState(false) 
    const dropdownRef = useRef(null); 
 
    const hasDropdown = dropdownItemns && dropdownItemns.length > 0; 
     
    const toggleDropdown = (e) => { 
        if (hasDropdown) { 
            e.preventDefault(); 
            setIsOpen(!isOpen); 
        } 
    }
    
    const handleMouseEnter = () => {
        if (hasDropdown) {
            setIsOpen(true);
        }
    };
    
    const handleMouseLeave = () => {
        if (hasDropdown) {
            setIsOpen(false);
        }
    };
    
    useEffect(() => { 
        const handleClickOutside = (event) => { 
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) { 
                setIsOpen(false) 
            } 
        }; 
 
        document.addEventListener('mousedown', handleClickOutside); 
        return () => { 
            document.removeEventListener('mousedown', handleClickOutside); 
        }; 
    }, []); 
 
    return ( 
      <li 
        className={`nav-item ${isOpen ? "active" : ""}`} 
        ref={dropdownRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      > 
        <NavLink 
          to={route} 
          className={`nav-link ${hasDropdown ? "has-dropdown" : ""}`} 
          onClick={toggleDropdown} 
        > 
          {content} 
          {hasDropdown && ( 
            <i 
              className={`bi bi-chevron-${isOpen ? "up" : "down"} dropdown-icon`} 
            ></i> 
          )} 
        </NavLink> 
        {hasDropdown && ( 
          <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}> 
            {dropdownItemns.map((item, index) => ( 
              <li key={index} className="dropdown-item"> 
                <NavLink to={item.route} className="dropdown-link"> 
                  <i className={item.icon}></i> 
                  <span className=''>{item.content}</span> 
                </NavLink> 
              </li> 
            ))} 
          </ul> 
        )} 
      </li> 
    ); 
}; 
 
export default ItemNavbar



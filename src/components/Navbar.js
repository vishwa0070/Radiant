import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // ✅ use NavLink instead of Link
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/" onClick={closeMenu}>
          <img src="/assets/RadiaantLogo.jpg" alt="Radiant Logo" className="logo-img" />
        </NavLink>
      </div>

      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><NavLink to="/" exact="true" onClick={closeMenu} activeclassname="active">Home</NavLink></li>
        <li><NavLink to="/about" onClick={closeMenu} activeclassname="active">About</NavLink></li>
        <li><NavLink to="/courses" onClick={closeMenu} activeclassname="active">Courses</NavLink></li>
        <li><NavLink to="/testimonies" onClick={closeMenu} activeclassname="active">Testimonies</NavLink></li>
        <li><NavLink to="/ashram" onClick={closeMenu} activeclassname="active">Ashram</NavLink></li>
        <li><NavLink to="/research" onClick={closeMenu} activeclassname="active">Research</NavLink></li>
        <li><NavLink to="/contribution" onClick={closeMenu} activeclassname="active">Contribution</NavLink></li>
        <li><NavLink to="/contact" onClick={closeMenu} activeclassname="active">Contact Us</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;

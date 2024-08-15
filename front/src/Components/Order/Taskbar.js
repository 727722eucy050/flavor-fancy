import React from 'react';
import { Link } from 'react-router-dom';
import './Taskbar.css';
import logo from './images/logo.jpg'; // Import the logo image

const Taskbar = () => {
  return (
    <header className="title-bar">
      <div className="logo-container">
        <img src={logo} alt="FlavorFlare Logo" className="logo-image" /> {/* Logo image */}
        <div className="logo-text">FlavorFlare</div> {/* Logo text */}
      </div>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/package">Package</Link></li>
          <li><Link to="/customorder">Custom Menu</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Taskbar;

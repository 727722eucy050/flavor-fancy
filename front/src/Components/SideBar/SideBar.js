import React from 'react';
import './Sidebar.css';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src="profile-image-url" alt="Profile" />
        <h2>Harsh Enterprises</h2>
      </div>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>My Projects</li>
          <li>My Leads</li>
          <li>Purchase Leads</li>
          <li className="active">Packages</li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;

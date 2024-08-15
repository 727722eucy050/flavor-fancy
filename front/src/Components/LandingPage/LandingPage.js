import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import img from './images/f2.jpg';

const LandingPage = () => {
  return (
    <div className="landing-page" >
      <div className="landing-content">
        <h1>Welcome to FlavorFlare</h1>
        <div className="buttons">
          <Link to="/admin-login" className="btn admin-btn">Admin Login</Link>
          <Link to="/signin" className="btn user-btn">User Login</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

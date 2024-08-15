import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Taskbar from '../Taskbar/Taskbar'; // Import Taskbar component
import './Package.css'; // Import CSS for styling

const Package = () => {
  const [menuItems, setMenuItems] = useState([]); // Initialize state for menu items
  const [filter, setFilter] = useState('all'); // Initialize state for filter

  // Fetch packages from Spring Boot API when component mounts
  useEffect(() => {
    fetch('http://localhost:8080/packages')  // Adjust the URL if your backend runs on a different port or path
      .then(response => response.json())
      .then(data => setMenuItems(data))  // Set the fetched data to state
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures this runs once when the component mounts

  // Filter items based on the selected filter
  const filteredItems = menuItems.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'veg' && item.veg) return true;
    if (filter === 'non-veg' && !item.veg) return true;
    if (filter === 'rating' && item.rating >= 4.5) return true;
    return false;
  });

  return (
    <div>
      <Taskbar /> {/* Render Taskbar component */}
      <div className="menu-page">
        <h1>Packages</h1>
        <div className="content">
          <div className="filter-selector">
            <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''} >All</button>
            <button onClick={() => setFilter('veg')} className={filter === 'veg' ? 'active' : ''}>Veg</button>
            <button onClick={() => setFilter('non-veg')} className={filter === 'non-veg' ? 'active' : ''}>Non-Veg</button>
            <button onClick={() => setFilter('rating')} className={filter === 'rating' ? 'active' : ''}>Rating > 4.5</button>
          </div>
          <div className="menu-items">
            {filteredItems.length === 0 ? (
              <p>No packages available</p>  // Message if no packages are available
            ) : (
              filteredItems.map((item) => (
                <div key={item.id} className="menu-item">
                  <Link to={`/package/${item.id}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'row', width: '100%' }}>
                    <img src={item.img} alt={item.packageName} className="menu-item-image" />
                    <div className="menu-item-content">
                      <h2 style={{ color: 'black' }}>{item.packageName}</h2>
                      <p><strong>Breakfast:</strong> {item.breakfastName}</p>
                      <p><strong>Lunch:</strong> {item.lunchName}</p>
                      <p><strong>Dinner:</strong> {item.dinnerName}</p>
                      <p className="price"><strong>Price:</strong> ₹{item.price}</p>
                      <p className="rating"><strong>Rating:</strong> {item.rating} ★</p>
                    </div>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
        <footer className="footer">
          <div className="footer-column">
            <ul>
              <li>Home</li>
              <li>Packages</li>
              <li>Custom Order</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="footer-column">
            <ul>
              <li>Address :</li>
              <li>FlavorFlare, BK Pudur, Kuniamuthur, Coimbatore-641008.</li>
              <li>Contact: 987654321, 978665432<br />
              Email: FlavorFlare@gmail.com</li>
            </ul>
          </div>
          <div className="footer-column social">
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
            <div>Copyright © 2024, PrimePlates.</div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Package;

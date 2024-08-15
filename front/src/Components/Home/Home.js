import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Taskbar from '../Taskbar/Taskbar'; // Import Taskbar component
import './Home.css'; // Import CSS for styling
import img1 from './images/break.avif'; // Import images for different sections
import img3 from './images/dinner.avif';
import img from './images/f1.jpg';
import img2 from './images/lunch.avif';
import img4 from './images/pack1.avif';
import img5 from './images/pack2.avif';
import img6 from './images/pack3.avif';

const Home = () => {
  return (
    <div className="home-container">
      <Taskbar/> {/* Render the Taskbar component */}
      <section className="hero-section" style={{ backgroundImage: `url(${img})` }}> {/* Hero section with background image */}
        <div className="hero-text">
          <h1 className='wel'>Welcome to Our Food Service</h1> {/* Hero title */}
          <Link to="/package" className="cta-button">Explore Our Packages</Link> {/* Call to action button */}
        </div>
      </section>
      <section id="packages" className="packages-section"> {/* Section for meals */}
        <h2>Meals</h2>
        <div className="packages-container">
          <div className="package">
            <img src={img1} alt="Basic Package" /> {/* Image for breakfast */}
            <h3>Break-Fast</h3>
            <p>Perfect for small gatherings and private parties.</p>
          </div>
          <div className="package">
            <img src={img2} alt="Premium Package" /> {/* Image for lunch */}
            <h3>Lunch</h3>
            <p>Ideal for larger events and corporate functions.</p>
          </div>
          <div className="package">
            <img src={img3} alt="Luxury Package" /> {/* Image for dinner */}
            <h3>Dinner</h3>
            <p>Top-tier service for weddings and grand events.</p>
          </div>
        </div>
      </section>
      <section id="blog" className="blog-section"> {/* Section for packages */}
        <h2>Packages</h2>
        <div className="blog-container">
          <div className="blog-post">
            <img src={img4} alt="Top 10 Catering Trends" /> {/* Image for package 1 */}
            <h3>Package 1</h3>
            <p>Discover the latest trends in the catering industry.</p>
          </div>
          <div className="blog-post">
            <img src={img5} alt="How to Plan a Perfect Event" /> {/* Image for package 2 */}
            <h3>Package 2</h3>
            <p>Tips and tricks for planning a successful event.</p>
          </div>
          <div className="blog-post">
            <img src={img6} alt="How to Plan a Perfect Event" /> {/* Image for package 3 */}
            <h3>Package 3</h3>
            <p>Tips and tricks for planning a successful event.</p>
          </div>
        </div>
      </section>
      <footer className="footer">
      <div className='footer'> {/* Footer section */}
      
        Address: FlavorFlare, BK Pudur, Kuniamuthur, Coimbatore-641008.<br />
        Contact: 987654321, 978665432<br />
        Email: FlavorFlare@gmail.com
      
    </div>
      </footer>
    </div>
  );
};

export default Home; // Export Home component

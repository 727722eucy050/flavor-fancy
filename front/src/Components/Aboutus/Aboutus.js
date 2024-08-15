import React from 'react';
import './Aboutus.css'; 
import img from './images/image.png'; 
import Taskbar from './Taskbar'; 

const Aboutus = () => {
  return (
    <div className='about-container'> {/* Main container for the about page */}
      <Taskbar /> {/* Include the Taskbar component */}
      <div className='about'>
        <h1 className='about-title'>A LITTLE ABOUT US</h1> 
        <div className='about-content'> {/* Container for the main content of the about section */}
          <div className='about-text'> {/* Container for the textual content */}
            <p>At FlavorFlare, we believe that good food brings people together. Established in 2022, we have been committed to serving wholesome, delicious, and affordable meals to our community. Whether you're a student, a professional, or a visitor, our food mess is your go-to place for a hearty meal.</p>
            <p>Our mission is to provide high-quality, nutritious, and tasty meals that cater to diverse tastes and dietary needs. We aim to create a welcoming environment where everyone can enjoy great food and feel at home.</p>
            <p>Our team is a group of passionate food enthusiasts, chefs, and staff dedicated to making your dining experience enjoyable. Our chefs bring their expertise and love for cooking into every dish they prepare, ensuring each meal is flavorful and satisfying.</p>
          </div>
          <div className='about-image'> {/* Container for the image */}
            <img src={img} alt="PrimePlates" /> {/* Image representing PrimePlates */}
          </div>
        </div>
      </div>
      <div className='properties'> {/* Container for the properties section */}
        <div className='property-box'> {/* Individual property box */}
          <h2>SATISFACTION</h2>
          <p>We work for customer contentment and not for money. This is the main reason for getting more clients and more orders.</p>
        </div>
        <div className='property-box'> {/* Individual property box */}
          <h2>TRUSTWORTHY</h2>
          <p>Delivering quality, taste, and presentation that reflects your event's unique style.Using the freshest ingredients to create dishes that delight your guests.</p>
        </div>
        <div className='property-box'> {/* Individual property box */}
          <h2>PLANNING</h2>
          <p>We plan, research, deliver, and evaluate every element of an event. We ensure the client’s opinion at every touch point.</p>
        </div>
      </div>
      <div className='footer'> {/* Footer section */}
        <b>
          Address: FlavorFlare, BK Pudur, Kuniamuthur, Coimbatore-641008.<br />
          Contact: 987654321, 978665432<br />
          Email: FlavorFlare@gmail.com
        </b>
      </div>
    </div>
  );
}

export default Aboutus; // Export the Aboutus component
